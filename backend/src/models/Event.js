import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String, default: 'TBD' },
  organizer: { type: String, default: 'E-Cell' }
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);
