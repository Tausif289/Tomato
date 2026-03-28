🍔 Zomato Clone – Full Stack Application

A full-stack Zomato clone application built with MERN stack, featuring Admin Dashboard, User Frontend, and Backend APIs. Users can browse restaurants, view menus, and place orders, while the admin can manage restaurants, menus, and users.

🏗️ Features
Frontend (User)
Browse restaurants by location & cuisine
View restaurant details and menu items
Add items to cart and place orders
Search and filter restaurants
User authentication and profile management
Admin Dashboard
Manage restaurants, categories, and menu items
View user list and orders
Role-based access control (Admin vs User)
Analytics dashboard (optional)
Backend (API)
RESTful APIs for user, restaurant, menu, and orders
JWT authentication & authorization
Secure password storage (bcrypt)
Database management with MongoDB
Integration with frontend & admin dashboard
💻 Tech Stack
Frontend: React.js, Redux, Tailwind CSS / Material UI
Admin Panel: React.js, Redux Toolkit, Ant Design / Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB / Mongoose
Authentication: JWT
Caching (optional): Redis
Deployment: AWS EC2 / Heroku / Vercel
Containerization (optional): Docker, Docker Compose
📁 Project Structure
zomato-clone/
│
├── backend/                 # Node.js + Express APIs
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/                # User React App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
│   └── package.json
│
├── admin/                   # Admin React App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
│   └── package.json
│
└── README.md
⚡ Installation & Setup
1. Clone the Repository
git clone https://github.com/<your-username>/zomato-clone.git
cd zomato-clone
2. Backend Setup
cd backend
npm install

Create .env file with the following variables:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

Run the server:

npm run dev
3. Frontend Setup (User)
cd ../frontend
npm install
npm start
Runs on http://localhost:3000
4. Admin Panel Setup
cd ../admin
npm install
npm start
Runs on http://localhost:3001 (or change port if needed)
