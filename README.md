# 📒 QuickNotes Pro

> A modern, full-stack note-taking application built with the MERN stack, designed for speed, simplicity, and secure user experience.

---

## 🚀 Live Demo

🔗 https://quicknotes-pro.vercel.app *(update after deployment)*

---

## 🧠 Overview

**QuickNotes Pro** is a feature-rich note management application that allows users to securely create, edit, and organize their notes in real time. Built using the **MERN stack**, the app emphasizes clean UI, efficient state management, and secure authentication.

---

## ✨ Features

* 🔐 **User Authentication**

  * Secure signup/login with JWT
  * Protected routes for authenticated users

* 📝 **Notes Management**

  * Create, update, delete notes
  * View all notes in a structured layout

* ⚡ **Responsive UI**

  * Smooth and modern interface
  * Optimized for performance

* 🔄 **State Management**

  * Redux Toolkit for global state handling

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## 📂 Project Structure

```
QuickNotes-Pro/
│
├── backend/        # Express API & MongoDB logic
├── frontend/       # React + Redux frontend
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Nikki03-tech/QuickNotes-Pro.git
cd QuickNotes-Pro
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=3001
MONGODB_URI=your_mongodb_uri
SECRET=your_jwt_secret
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoints

### 📝 Notes

* `GET /api/notes`
* `POST /api/notes`
* `PUT /api/notes/:id`
* `DELETE /api/notes/:id`

### 🔐 Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`
* `GET /api/auth/logout`
* `GET /api/auth/check-auth`

---

## 🔒 Authentication

* Uses **JWT (JSON Web Tokens)**
* Ensures secure access to protected routes
* Token-based session management

---

## 📸 Screenshots

<img width="1919" height="854" alt="image" src="https://github.com/user-attachments/assets/f4dba46f-cf1d-4abe-b110-3a3c5a317e6b" />
<img width="1919" height="854" alt="image" src="https://github.com/user-attachments/assets/9ad02ac4-6db4-42d2-9325-78f4a7076b9b" />


---

## 🌱 Future Enhancements

* 🔍 Search and filter notes
* 📂 Categories & tags
* 🌙 Dark mode toggle
* 📱 Mobile optimization

---

## 📌 Key Highlights

* Full-stack MERN application
* Clean and scalable folder structure
* Secure authentication system
* Production-ready architecture

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Nikitha Singh Rajpurohit**
🔗 https://github.com/Nikki03-tech
