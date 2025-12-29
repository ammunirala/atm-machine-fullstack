# 🏧 ATM Machine – Full Stack Application

A **Full Stack ATM Machine application** built using **Spring Boot (Backend)** and **React (Frontend)** that simulates real-world banking operations with proper validations and business rules.

This project is designed to demonstrate **real banking logic**, clean architecture, and smooth frontend–backend communication.

---

## 🚀 Features

### 🔐 Authentication
- Login using **Account Number & PIN**
- Secure validation with proper error handling

### 💰 Banking Operations
- Check Balance (PIN verification required)
- Deposit Money
- Withdraw Money

### 🏦 Real Banking Rule
- **Daily Withdrawal Limit: ₹10,000**
- Auto reset of withdrawal limit on next day

### 📄 Transactions
- Mini Statement / Transaction History
- Shows type, amount, and date-time of transactions

### ⚠️ Error Handling
- Global Exception Handling
- Clean and meaningful API responses

---

## 🛠 Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- REST APIs

### Frontend
- React
- React Router
- Axios
- Basic UI Styling (CSS)

### Tools
- Git & GitHub
- Postman
- VS Code

---

## 📁 Project Structure


atm-machine-fullstack
│
├── atm-machine # Spring Boot Backend
│ ├── controller
│ ├── service
│ ├── entity
│ ├── repository
│ ├── exception
│ └── resources
│
├── atm-machine-frontend # React Frontend
│ ├── src
│ │ ├── pages
│ │ ├── services
│ │ └── App.js
│ └── public
│
└── README.md



---

## ⚙️ Backend Setup (Spring Boot)

1. Open backend folder:
```bash
cd atm-machine

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/atm_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Run backend:

mvn spring-boot:run


Backend will run on:

http://localhost:8080

⚙️ Frontend Setup (React)

Open frontend folder:

cd atm-machine-frontend


Install dependencies:

npm install


Start frontend:

npm start


Frontend will run on:

http://localhost:3000

🔌 API Endpoints (Sample)
Method	Endpoint	Description
POST	/atm/login	Login
GET	/atm/balance/{accNo}	Check balance
POST	/atm/deposit	Deposit money
POST	/atm/withdraw	Withdraw money
GET	/atm/transactions/{accNo}	Transaction history
POST	/atm/change-pin	Change PIN
🧠 What I Learned

Implementing real banking rules like daily withdrawal limits

Clean separation of controller, service, and repository layers

Global exception handling in Spring Boot

React routing and API integration

Debugging full-stack issues effectively

📌 Future Enhancements

Dark Mode UI

JWT Authentication

Admin Dashboard

PDF Transaction Statements

Deployment (AWS / Render / Netlify)

👨‍💻 Author

Amresh Kumar Nirala
B.Tech CSE | Full Stack Developer
Java • Spring Boot • React • MySQL

🔗 LinkedIn: (add your LinkedIn profile link)
🔗 GitHub: (this repository)


⭐ If you like this project, give it a star






