import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String }],
  status: { type: String, enum: ['submitted', 'in_review', 'approved', 'rejected', 'incubating'], default: 'submitted' },
  mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  fundsRaised: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Idea', ideaSchema);
