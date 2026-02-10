import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './src/models/User.js';
import Idea from './src/models/Idea.js';
import Event from './src/models/Event.js';

const run = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/innovation_dashboard';
  await mongoose.connect(uri);
  console.log('Seeding database...');

  await User.deleteMany({});
  await Idea.deleteMany({});
  await Event.deleteMany({});

  const admin = await User.create({
    name: 'Admin',
    email: 'admin@dashboard.test',
    password: await bcrypt.hash('admin123', 10),
    role: 'admin'
  });

  const mentor = await User.create({
    name: 'Mentor Mary',
    email: 'mentor@dashboard.test',
    password: await bcrypt.hash('mentor123', 10),
    role: 'mentor'
  });

  const student = await User.create({
    name: 'Student Sam',
    email: 'student@dashboard.test',
    password: await bcrypt.hash('student123', 10),
    role: 'student'
  });

  const ideas = await Idea.insertMany([
    { title:'Smart Irrigation', summary:'IoT based water optimization', owner: student._id, tags:['iot','agri'], status:'in_review', mentors:[mentor._id], fundsRaised: 25000 },
    { title:'Campus Carpool', summary:'Ride-sharing for students', owner: student._id, tags:['mobility'], status:'approved', mentors:[mentor._id], fundsRaised: 50000 },
    { title:'Waste2Energy', summary:'Converting organic waste', owner: student._id, tags:['sustainability'], status:'incubating', mentors:[mentor._id], fundsRaised: 125000 }
  ]);

  const now = new Date();
  await Event.insertMany([
    { title:'Ideation Bootcamp', description:'Design thinking workshop', date: new Date(now.getTime()+7*86400000), location:'Auditorium' },
    { title:'Pitch Day', description:'Present to panel', date: new Date(now.getTime()+21*86400000), location:'Seminar Hall' }
  ]);

  console.log('Seed complete');
  await mongoose.disconnect();
};

run().catch(err => { console.error(err); process.exit(1); });
