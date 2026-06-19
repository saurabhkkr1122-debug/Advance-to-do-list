# 🚀 Advanced Todo App V3

A modern and feature-rich Todo List Web Application built using HTML, CSS, JavaScript, Firebase Authentication, and Firestore Database.

## 📌 Features

### Authentication

* User Signup
* User Login
* Firebase Authentication
* Secure Logout

### Task Management

* Add Tasks
* Edit Tasks
* Delete Tasks
* Mark Tasks as Completed
* Task Categories
* Task Priorities
* Due Dates

### Dashboard

* Total Tasks Counter
* Completed Tasks Counter
* Pending Tasks Counter
* Progress Bar

### Analytics

* Doughnut Chart using Chart.js
* Task Completion Tracking

### User Experience

* Search Tasks
* Task Filtering
* Dark Mode
* Responsive Design
* Sidebar Navigation

### Storage

* Local Storage Support
* Firebase Firestore Integration

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Firebase Authentication
* Firebase Firestore
* Chart.js
* Local Storage API

---

## 📂 Project Structure

Advanced-Todo-App-V3

├── index.html

├── calendar.html

├── README.md

│

├── css

│ ├── style.css

│ └── auth.css

│

├── js

│ ├── task.js

│ ├── auth.js

│ ├── firebase.js

│ ├── firestore.js

│ ├── chart.js

│ ├── advanced.js

│ └── calendar.js

│

└── pages

├── login.html

└── signup.html

---

## ⚙️ Installation

### Clone Repository

git clone https://github.com/yourusername/advanced-todo-app.git

### Open Project

Open the project folder in VS Code.

### Install Live Server

Install the Live Server extension from VS Code Marketplace.

### Run Project

Right Click:

index.html

Select:

Open With Live Server

---

## 🔥 Firebase Setup

### Create Firebase Project

1. Open Firebase Console
2. Create New Project
3. Enable Authentication
4. Enable Email/Password Login
5. Create Firestore Database

### Add Firebase Configuration

Open:

js/firebase.js

Replace:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "YOUR_SENDER_ID",
appId: "YOUR_APP_ID"
};

with your Firebase credentials.

---

## 📊 Analytics

The project uses Chart.js to display:

* Completed Tasks
* Pending Tasks

Chart updates automatically when tasks are modified.

---

## 🔒 Authentication Flow

Signup → Firebase Auth

Login → Firebase Auth

Logout → Firebase Sign Out

---

## 🚀 Future Enhancements

* Progressive Web App (PWA)
* Push Notifications
* Drag & Drop Sorting
* Task Sharing
* Team Collaboration
* Cloud Sync
* Mobile App Version

---

## 👨‍💻 Author

Saurabh Kumar

Web Development Project

Built for Learning, Internship and Placement Preparation.

---

## 📄 License

This project is open-source and available for educational purposes.
