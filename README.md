# 💬 Chat App (MERN + WebSockets)

A **real-time chat application** built with the **MERN stack** and **Socket.IO**.  
It supports **user authentication**, **real-time messaging**, and **media sharing**, making it feel like a modern chat platform.

Deployed here-->
  ## 🚀 Live Demo
[Click here to try the app on Render](https://mern-chat-app-3z8a.onrender.com)
---

## 💡 Why I Built This

I wanted to go beyond basic CRUD apps and build something that **feels like a real product**.  
A chat application was the perfect choice because it challenged me in multiple areas:

- 🔐 **Authentication** – Implemented secure login & signup with JWT + bcrypt.  
- ⚡ **Real-time Communication** – Learned WebSockets with Socket.IO for instant messaging.  
- 🗄️ **Database & API Design** – Designed MongoDB collections and REST APIs with Express.  
- 🎨 **Frontend State Management** – Used React + Zustand to manage live chat states.  
- ☁️ **Cloud Storage** – Integrated Cloudinary for profile images and media sharing.  

This project gave me hands-on experience with **end-to-end full-stack development** and showed how to make different technologies work together seamlessly.



✨ Features-->
  -🔐 User Authentication – Register, login, and secure sessions.
  -💬 1-to-1 Real-time Chat – Built with WebSockets (Socket.IO).
  -🖼️ Image Sharing – Upload and send media via Cloudinary.
  -🌙 Theme Support – Light/Dark mode toggle.
  -🔔 Toast Notifications – For new messages and actions.



🏆 What I Learned-->
  -How to implement real-time apps with WebSockets.
  -Designing REST APIs + database schemas for scalable apps.
  -Handling authentication & security in full-stack projects.
  -Managing state & live updates efficiently on the frontend.
  

## 🚀 Tech Stack

**Frontend**
- React  
- React Router DOM  
- Zustand (state management)  
- Axios  
- Socket.IO Client  
- React Toastify & Hot Toast (notifications)  

**Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- JWT + bcryptjs (authentication)  
- Socket.IO (real-time communication)  
- Cloudinary (image uploads)  
- CORS, dotenv, cookie-parser  

---

![Chat App Screenshot](assets/acc.png)
![Chat App Screenshot](assets/chat.png)

## 📂 Folder Structure

```bash
CHAT-APP
│── backend/               # Server-side (Node.js + Express + MongoDB)
│   ├── src/
│   │   ├── controllers/   # Handles request/response logic
│   │   ├── middleware/    # Authentication, error handling
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API endpoints
│   │   └── index.js       # Server entry point
│   ├── .env               # Environment variables
│   ├── package.json       
│
│── frontend/              # Client-side (React)
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── constants/     # Constants (API URLs, config)
│   │   ├── lib/           # Helper functions (e.g., API calls)
│   │   ├── pages/         # Main pages (Login, Signup, Chat, Profile, etc.)
│   │   ├── store/         # Zustand store for state management
│   │   ├── App.jsx        # Main App component
│   │   └── index.css      # Global styles
│   ├── package.json
│
└── README.md

