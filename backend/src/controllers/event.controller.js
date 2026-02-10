import Event from '../models/Event.js';

export const listEvents = async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
};

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
  if (!event) return res.status(404).json({ message: 'Not found' });
  res.json(event);
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndDelete(id);
  if (!event) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};
