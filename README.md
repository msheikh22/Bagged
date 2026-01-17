# Bagged 



Bagged

Bagged is a fast, competitive marketplace connecting buyers with verified personal shoppers.
Post a request for any item, receive multiple quotes, and choose the shopper that fits your needs. VIP concierge service is available for premium styling and curation.

⸻

Features
	•	Post requests for items or outfits
	•	Personal shoppers compete with quotes (price + delivery)
	•	Verified and VIP shopper badges
	•	Loyalty points and rewards for repeat users
	•	Buyer protection and escrow for secure payments
	•	Interactive dashboard for switching quotes or shoppers
	•	Reviews and ratings for shoppers
	•	Email notifications for key actions

⸻

Tech Stack
	•	Frontend: React, TailwindCSS, React Router, Axios
	•	Backend: Node.js, Express, MongoDB, Mongoose, JWT
	•	Payments: Stripe (escrow & secure payments)
	•	Notifications: Email (configurable via backend utils)

  Folder Structure
  bagged/
├── frontend/
├── backend/
└── README.md

•	Frontend contains React app
	•	Backend contains API, models, controllers, routes, middleware, utils

Setup & Run
	1.	Clone the repository:
git clone <repo-url>
	2.	Frontend:
  cd bagged/frontend
npm install
npm start
	3.	Backend:
cd bagged/backend
npm install
node server.js
4.	Create .env files for frontend and backend:
Frontend .env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
Backend .env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
STRIPE_SECRET_KEY=<your-stripe-secret>
EMAIL_USER=<your-email>
EMAIL_PASS=<your-email-password>

Usage
	•	Sign up as buyer or personal shopper
	•	Post requests and receive quotes
	•	Choose quotes and pay securely through Bagged
	•	Earn loyalty points for repeat usage
	•	Leave reviews for shoppers

⸻

About Bagged

Bagged simplifies personal shopping: fast, trustworthy, competitive, and secure. Buyers save time and effort, while shoppers gain reputation, visibility, and guaranteed payments.
