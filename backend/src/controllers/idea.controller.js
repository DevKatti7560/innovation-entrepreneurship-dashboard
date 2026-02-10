import Idea from "../models/Idea.js";
import Notification from "../models/Notification.js";

// 🧠 Get all ideas (for mentors/admins)
export const listIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find()
      .populate("owner", "name email")
      .populate("mentors", "name email");
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 🧠 Get ideas of the logged-in user
export const myIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({ owner: req.user.id });
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 🧠 Create a new idea
export const createIdea = async (req, res) => {
  try {
    const { title, summary, tags } = req.body;
    const idea = await Idea.create({
      title,
      summary,
      tags,
      owner: req.user.id,
    });
    res.status(201).json(idea);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 🧠 Update an idea (mentor/admin/student with permission)
export const updateIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const idea = await Idea.findById(id);

    if (!idea) return res.status(404).json({ message: "Idea not found" });

    // Permission check
    if (
      String(idea.owner) !== req.user.id &&
      req.user.role !== "admin" &&
      req.user.role !== "mentor"
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Track status before update
    const prevStatus = idea.status;

    // Update the fields
    Object.assign(idea, req.body);
    await idea.save();

    // 🔔 Trigger notification only if status changed
    if (req.body.status && prevStatus !== req.body.status) {
      await Notification.create({
        user: idea.owner,
        message: `Your idea "${idea.title}" status changed to ${idea.status}`,
      });
      console.log(
        `✅ Notification created for idea owner: ${idea.owner} (${idea.status})`
      );
    }

    res.json(idea);
  } catch (err) {
    console.error("❌ Error updating idea:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 🧠 Delete an idea
export const deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const idea = await Idea.findById(id);

    if (!idea) return res.status(404).json({ message: "Idea not found" });

    if (
      String(idea.owner) !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await idea.deleteOne();

    res.json({ message: "Idea deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
