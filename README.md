# Project Management System API

A **Node.js** and **MongoDB** backend application to manage **admins, employees, users, projects, and teams**.  
It provides RESTful APIs for admin and employee operations such as user management, project tracking, and team assignments.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [API Endpoints](#api-endpoints)  
- [Technologies Used](#technologies-used)  
- [Notes](#notes)  

---

## Overview

The **Project Management System API** allows:

- Admins to manage users, projects, and teams  
- Employees to register, log in, and view projects  
- MongoDB integration for persistent storage  
- RESTful API design for scalability and flexibility  

Built using **Express.js**, **Mongoose**, and **MongoDB**.

---

## Features

### Admin Features
- Admin registration and login  
- Add, update, and delete users  
- Create and manage projects  
- Update project status  
- Add and manage teams  

### Employee Features
- Employee registration and login  
- View all assigned projects  
- View specific project details  

---

## Project Structure

```
src/
│
├─ config/ # App and DB configurations
│ ├─ express.js # Express app setup
│ ├─ mongoose.js # MongoDB connection setup
│ └─ router.js # Router template
│
├─ controller/ # Request handlers
│ ├─ AdminController.js
│ └─ EmployeeController.js
│
├─ model/ # MongoDB Schemas
│ ├─ AdminSchema.js
│ ├─ EmployeeSchema.js
│ ├─ ProjectSchema.js
│ ├─ TeamSchema.js
│ └─ UserSchema.js
│
├─ routes/ # Express routes
│ ├─ adminRoutes.js
│ └─ employeeRoutes.js
│
└─ index.js # Entry point

```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NGowthamKumar/Project-Management-System
cd Project-Management-System
```

2. Install dependencies:

```bash
npm install
```

3. Start MongoDB (make sure it’s running):

```bash
mongod
```

4. Start the server:

```bash
node src/index.js
```

Default server port: `8000`.

---

## API Endpoints

### Admin Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST   | `/api/admin/admin-login`            | Admin login |
| POST   | `/api/admin/admin-register`         | Register a new admin |
| POST   | `/api/admin/add-user`               | Add new user |
| GET    | `/api/admin/get-user/:email`        | Get user by email |
| POST   | `/api/admin/update-user`            | Update user details |
| POST   | `/api/admin/delete-user`            | Delete user |
| POST   | `/api/admin/add-project`            | Add new project |
| POST   | `/api/admin/update-project-state`   | Update project state |
| POST   | `/api/admin/delete-project`         | Delete project |
| POST   | `/api/admin/add-team`               | Add new team |

---

### Employee Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST   | `/api/employee/employee-login`      | Employee login |
| POST   | `/api/employee/employee-register`   | Employee registration |
| GET    | `/api/employee/projects`            | Get all projects |
| GET    | `/api/employee/project/:project_name` | Get project by name |

---

## Technologies Used

- Node.js  
- Express.js  
- MongoDB & Mongoose  
- RESTful API Architecture  

---

## Notes

- Ensure MongoDB service is running before starting the server.  
- Default server port is `8000`.  
- Database name: `pms` (Project Management System).  
- Use environment variables in production for sensitive data like DB URI and PORT.

---
