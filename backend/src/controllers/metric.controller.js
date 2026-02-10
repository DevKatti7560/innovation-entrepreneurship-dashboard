import Idea from '../models/Idea.js';
import Event from '../models/Event.js';

export const getMetrics = async (req, res) => {
  const totalIdeas = await Idea.countDocuments();
  const inReview = await Idea.countDocuments({ status: 'in_review' });
  const approved = await Idea.countDocuments({ status: 'approved' });
  const incubating = await Idea.countDocuments({ status: 'incubating' });
  const eventsUpcoming = await Event.countDocuments({ date: { $gte: new Date() } });
  const totalFunds = await Idea.aggregate([{ $group: { _id: null, sum: { $sum: "$fundsRaised" } } }]);
  res.json({
    totalIdeas,
    inReview,
    approved,
    incubating,
    eventsUpcoming,
    totalFunds: totalFunds[0]?.sum || 0
  });
};
