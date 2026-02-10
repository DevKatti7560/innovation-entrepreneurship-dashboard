import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import ideaRoutes from './routes/idea.routes.js';
import eventRoutes from './routes/event.routes.js';
import metricRoutes from './routes/metric.routes.js';

const app = express();

// db
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({status:'ok', message:'Innovation & Entrepreneurship API'}));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/ideas', ideaRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/metrics', metricRoutes);

// not found
app.use((req,res) => res.status(404).json({message:'Route not found'}));

export default app;
