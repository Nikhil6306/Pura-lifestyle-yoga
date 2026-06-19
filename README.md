# Pure Lifestyle Yoga - Full Stack Application

Complete full-stack yoga booking platform with React frontend, Express.js backend, and MongoDB database.

## Project Structure

```
yoga/
├── server/                 # Node.js/Express Backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── seeds/             # Database seeding
│   ├── server.js          # Entry point
│   ├── package.json       # Dependencies
│   └── .env.example       # Environment template
│
└── client/                # React Frontend
    ├── public/            # Static files
    ├── src/
    │   ├── components/    # Reusable components
    │   ├── pages/         # Page components
    │   ├── hooks/         # Custom hooks
    │   ├── App.js         # Main app component
    │   ├── App.css        # Styles
    │   ├── index.js       # Entry point
    │   └── index.css      # Global styles
    └── package.json       # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud Atlas)
- npm or yarn

### Backend Setup

1. Navigate to server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):

```bash
MONGODB_URI=mongodb://localhost:27017/pure-yoga
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

4. Seed the database:

```bash
node seeds/seedData.js
```

5. Start the server:

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Frontend will open on `http://localhost:3000`

## API Endpoints

### Bookings

- `GET /api/bookings` - Get all bookings (with optional status filter)
- `GET /api/bookings/:id` - Get booking by ID
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### Services

- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service (admin)
- `PUT /api/services/:id` - Update service (admin)

### Trainers

- `GET /api/trainers` - Get all trainers
- `GET /api/trainers/:id` - Get trainer by ID
- `POST /api/trainers` - Create new trainer (admin)
- `PUT /api/trainers/:id` - Update trainer (admin)

## Features

### Customer Features

- Browse yoga services
- View trainer profiles with ratings
- Multi-step booking wizard
- Real-time booking confirmation
- Responsive design

### Admin Features

- Dashboard with metrics
- Booking management
- Status tracking (new, pending, confirmed, cancelled)
- Lead management
- Quick booking confirmation

## Technologies Used

### Backend

- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- dotenv - Environment management
- express-validator - Input validation
- CORS - Cross-origin support

### Frontend

- React 18 - UI library
- Axios - HTTP client
- React Router - Navigation
- CSS3 - Styling

## Database Models

### Booking

- bookingRef, name, phone, email, service, trainer, date, time, address, notes, status

### Service

- name, description, price, per, icon, duration, level, popular

### Trainer

- name, role, experience, bio, tags, rating, reviews, emoji, availability

## Environment Variables

### Backend (.env)

```
MONGODB_URI=mongodb://localhost:27017/pure-yoga
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

## Development

### Running in Development Mode

Terminal 1 - Backend:

```bash
cd server
npm run dev
```

Terminal 2 - Frontend:

```bash
cd client
npm start
```

### Production Build

Frontend build:

```bash
cd client
npm run build
```

## License

MIT




# 🚀 Commands to Run This Project
# Step 1: Backend Setup & Run
# Navigate to server folder
cd server

# Install dependencies
npm install

# Create .env file (copy from .env.example and update MongoDB URI if needed)
# Windows: copy .env.example .env
# Mac/Linux: cp .env.example .env

# Seed initial data (services & trainers)
node seeds/seedData.js

# Start backend server (runs on port 5000)
npm run dev



# Step 2: Frontend Setup & Run (Open NEW terminal)

# Navigate to client folder
cd client

# Install dependencies
npm install

# Start React app (opens on port 3000)
npm start






# 🎯 One-Time Setup Commands (First Time Only)
# 1. Backend
cd yoga/server
npm install
node seeds/seedData.js

# 2. Frontend (new terminal)
cd yoga/client
npm install



# 📝 Everyday Commands (After Setup)
# Terminal 1: Backend
cd yoga/server
npm run dev

# Terminal 2: Frontend
cd yoga/client
npm start"# Pura-lifestyle-yoga" 
