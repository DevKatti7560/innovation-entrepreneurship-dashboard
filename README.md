# Innovation & Entrepreneurship Activity — MERN Dashboard

A clean, ready-to-run MERN project for college Innovation & Entrepreneurship activities.
Includes: JWT auth, Ideas CRUD, Events management, and Dashboard metrics.

## Quick Start

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```
API URL: `http://localhost:5000`

### 2) Frontend
Open a new terminal:
```bash
cd frontend
npm install
# Optionally set API URL if different:
# echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
```
Frontend URL: `http://localhost:5173`

### Demo Logins (after seeding)
- Student: `student@dashboard.test` / `student123`
- Mentor: `mentor@dashboard.test` / `mentor123`
- Admin:  `admin@dashboard.test` / `admin123`

## Folder Structure
```
mern-innovation-dashboard/
  backend/    # Express, Mongoose, JWT
  frontend/   # React + Vite client
```

## Notes
- Make sure MongoDB is running locally on the default port or change `MONGO_URI` in `backend/.env`.
- You can deploy the backend to services like Render/railway and set `VITE_API_URL` on the frontend.
- CORS is enabled for local development.
```
## 3)To check MongoDB

start it manually from PowerShell:

mongosh

show dbs

use innovation_dashboard

show collections

db.users.find().pretty()
db.ideas.find().pretty()
db.events.find().pretty()
db.notifications.find().pretty()
