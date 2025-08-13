# AcademiLink Backend

## Project Overview

AcademiLink is a secure and scalable freelance academic writing platform connecting clients with skilled writers. The backend handles user authentication, job postings, bidding, real-time messaging, payment processing via escrow, ratings, and admin management.

## Technology Stack

- **Node.js & Express.js**: REST API server and business logic  
- **MongoDB**: NoSQL database for storing users, jobs, bids, messages, transactions  
- **Socket.io**: Real-time chat and notifications  
- **JWT**: Secure authentication tokens  
- **Multer**: File upload handling  
- **Payment Gateways**: Razorpay (India), Stripe (Global)  

## Key Features

- User registration and role-based profiles (Writers, Clients, Admins)  
- Job creation, browsing, and bidding system  
- Real-time, one-on-one chat with file sharing  
- Secure escrow payment flow with payment gateway integrations  
- Ratings and reviews for clients and writers  
- Admin dashboard APIs for managing users and disputes  

## Folder Structure

/src
/controllers # Route handlers
/models # MongoDB schemas
/routes # API routes
/middlewares # Authentication, error handling
/services # Payment, notifications, socket handling
/utils # Helper functions
server.js # Entry point


## Getting Started

1. Clone the repo  
2. Install dependencies: `npm install`  
3. Configure environment variables for DB connection, JWT secret, and payment API keys  
4. Run the server: `npm start` or `npm run dev` (for nodemon)  

## API Highlights

- `POST /api/auth/register` — Register a user  
- `POST /api/auth/login` — Login and get JWT  
- `GET /api/jobs` — List available jobs  
- `POST /api/jobs` — Create a new job  
- `POST /api/jobs/:id/bid` — Submit a bid  
- `POST /api/messages` — Send a chat message  
- `POST /api/payments/initiate` — Start escrow payment  
- `POST /api/payments/release` — Release payment after approval  
- `POST /api/reviews` — Submit ratings and reviews  

## Contribution

Feel free to contribute by submitting pull requests or raising issues. Please follow the code style and write tests where applicable.

---

**Contributor:** Sian Soj
