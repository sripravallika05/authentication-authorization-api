# 🔐 Authentication & Authorization API

A secure backend system built using **Node.js, Express, PostgreSQL, and JWT**
This project provides user authentication, authorization, and role-based access control.

---

## 🚀 Features

- User Registration (Signup)
- User Login (JWT Authentication)
- Password Hashing using bcrypt
- Access & Refresh Token System
- Protected Routes using Middleware
- Role-Based Access Control (USER / ADMIN)
- PostgreSQL Database Integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JSON Web Token (JWT)
- bcrypt
- dotenv
- cookie-parser
- cors

---

## 📁 Project Overview

This project follows a clean **MVC (Model–View–Controller)** architecture:

- **Models** → Database queries
- **Controllers** → Request handling
- **Services** → Business logic
- **Routes** → API endpoints
- **Middlewares** → Authentication & authorization logic
- **Utils** → JWT & password utilities

---

## 🔐 Authentication Flow

1. User registers with name, email, password  
2. Password is hashed using bcrypt  
3. User logs in using credentials  
4. JWT access token + refresh token are generated  
5. Access token is used for protected routes  
6. Role middleware controls access (USER / ADMIN)

---

## 🌐 API Endpoints

### 🔐 Auth Routes

- `POST /auth/register` → Register user  
- `POST /auth/login` → Login user  
- `POST /auth/refresh` → Refresh access token  
- `POST /auth/logout` → Logout user  

---

### 👤 User Routes

- `GET /user/profile` → Get user profile (Protected)  
- `GET /user/admin` → Admin-only route  


## 🔒 Security Features

- Password hashing (bcrypt)
- JWT authentication
- Refresh token system
- Protected routes
- Role-based authorization


## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
npm install

### 2️⃣ Create `.env` file

PORT=5000

DATABASE_URL=postgresql://postgres:password@localhost:5432/authdb
JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_secret

### 3️⃣ Create PostgreSQL database

CREATE DATABASE authdb;


Create tables:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE NOT NULL,
password TEXT NOT NULL,
role VARCHAR(20) DEFAULT 'USER',
created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE refresh_tokens (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
token TEXT NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
);


### 4️⃣ Run the server

node server.js


OR

npm run dev

## 👨‍💻 Author
Sri pravallika Malla

## 🚀 Future Improvements

- Email verification system  
- Password reset functionality  
- Docker deployment  
- Cloud deployment (Render / AWS)


