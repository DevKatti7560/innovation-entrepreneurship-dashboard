# 🚀 Innovation & Entrepreneurship Activity Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-4-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</p>

<p align="center">
  <b>A full-stack dashboard for managing Innovation & Entrepreneurship activities.</b>
</p>

<p align="center">
  <a href="https://innovation-entrepreneurship-git-554848-devaraja-kattis-projects.vercel.app">
    🌐 Live Demo
  </a>
  &nbsp; • &nbsp;
  <a href="https://github.com/DevKatti7560/innovation-entrepreneurship-dashboard">
    📂 GitHub Repository
  </a>
</p>

---

## 📌 About The Project

The **Innovation & Entrepreneurship Activity Dashboard** is a full-stack web application designed to manage and monitor college-level innovation and entrepreneurship activities.

The platform provides a centralized system for students, mentors, and administrators to manage:

* 💡 Innovation ideas
* 📅 Events
* 💰 Funding information
* 📊 Activity metrics
* 👥 Role-based activities

The application uses **JWT authentication** and **role-based access control** to provide a secure and organized platform.

---

## ✨ Features

### 🔐 Authentication

* User registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* Role-based authorization

### 💡 Idea Management

* Submit innovation ideas
* View submitted ideas
* Track idea status
* Mentor/Admin evaluation
* Funding information
* CRUD operations

### 📅 Event Management

* View upcoming events
* Create and manage events
* Event registration
* Event information management

### 📊 Dashboard

* Upcoming events
* Total funding
* Innovation activity metrics
* Idea statistics
* Centralized dashboard

### 👥 User Roles

| Role         | Access                                          |
| ------------ | ----------------------------------------------- |
| 🎓 Student   | Submit ideas, view events, and track activities |
| 🧑‍🏫 Mentor | Review ideas and manage activities              |
| 👨‍💼 Admin  | Manage ideas, events, and platform activities   |

---

## 📸 Screenshots

### 🔐 Login

<p align="center">
  <img src="screenshots/login.png" width="90%" alt="Login Page">
</p>

### 📊 Dashboard

<p align="center">
  <img src="screenshots/dashboard.png" width="90%" alt="Dashboard">
</p>

### 💡 Ideas

<p align="center">
  <img src="screenshots/ideas.png" width="90%" alt="Ideas Management">
</p>

### 📅 Events

<p align="center">
  <img src="screenshots/events.png" width="90%" alt="Events Management">
</p>

---

## 🛠️ Tech Stack

### Frontend

* React 18
* Vite
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT
* bcrypt
* Mongoose
* CORS

### Database

* MongoDB
* MongoDB Atlas

### Deployment

* Vercel — Frontend
* Render — Backend
* MongoDB Atlas — Database

---

## 📂 Project Structure

```text
innovation-entrepreneurship-dashboard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   │
│   ├── app.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   ├── dashboard.png
│   ├── events.png
│   ├── ideas.png
│   └── login.png
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/DevKatti7560/innovation-entrepreneurship-dashboard.git
cd innovation-entrepreneurship-dashboard
```

---

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Seed the Database

```bash
npm run seed
```

### Start the Backend

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Open a **new terminal** and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

> ⚠️ **Important:** Never commit your `.env` file or expose your MongoDB credentials and JWT secret.

---

# 🔑 Demo Credentials

The application provides demo accounts for testing different user roles.

### 🎓 Student

```text
Email: student@dashboard.test
Password: student123
```

### 🧑‍🏫 Mentor

```text
Email: mentor@dashboard.test
Password: mentor123
```

### 👨‍💼 Admin

```text
Email: admin@dashboard.test
Password: admin123
```

> These credentials are provided for demonstration purposes.

---

# ☁️ Deployment

The application is deployed using:

* **Vercel** — Frontend
* **Render** — Backend
* **MongoDB Atlas** — Database

### Deployment Architecture

```text
                         GitHub
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
            ▲ Vercel              🚀 Render
            Frontend               Backend
                 │                     │
                 └──────────┬──────────┘
                            │
                            ▼
                    🍃 MongoDB Atlas
                        Database
```

---

## 🌐 Live Demo

### Frontend — Vercel

🔗 https://innovation-entrepreneurship-git-554848-devaraja-kattis-projects.vercel.app

### Backend — Render

🔗 https://innovation-entrepreneurship-dashboard.onrender.com

### Database — MongoDB Atlas

MongoDB Atlas is used as the production database for storing application data.

---

# 👨‍💻 Author

## Devaraja Katti

**B.E. Artificial Intelligence & Machine Learning**

**Full-Stack Developer • AI & ML Enthusiast**

### Connect With Me

* 💼 [LinkedIn](https://www.linkedin.com/in/devaraja-katti-58136a2a1/)
* 🐙 [GitHub](https://github.com/DevKatti7560)

---

<p align="center">

⭐ If you like this project, consider giving it a star!

<br><br>

<b>Built with React, Node.js, Express & MongoDB</b>

</p>
