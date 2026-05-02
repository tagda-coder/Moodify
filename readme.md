# 🎵 Moodify

> **Music that matches how you feel.**

Moodify is a mood-based music discovery web app built on the MERN stack. Tell us how you're feeling — we handle the rest. No more endless scrolling to find the right song. Just pick your mood and let Moodify curate the perfect playlist for you.

---

## ✨ Features

- **Mood-Based Discovery** — Select your current mood and instantly get a curated playlist matching your vibe
- **JWT Authentication** — Secure register/login flow with token-based auth and protected routes
- **Smart Onboarding** — New users are guided to pick their mood right after signup before landing on their dashboard

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Styling | Tailwind CSS v4 + shadcn/ui + MagicUI |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Cache | Redis (ioredis) |
| Auth | JWT + bcrypt |
| File Upload | Multer + Cloudinary |

---

## ⚙️ Installation

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Redis instance

### Clone the repo

```bash
git clone https://github.com/tagda-coder/Moodify.git
cd Moodify
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 Usage

1. Visit `http://localhost:5173`
2. Click **Get Started** to create an account
3. After registering, select your current mood
4. Get your personalized playlist instantly
5. Returning users are taken directly to their dashboard

---

## 🔭 Future Scope

- Spotify / YouTube Music API integration to replace manual uploads
- AI-powered mood detection from text or facial expression
- Social features — follow users, share playlists
- Lyrics display while playing
- PWA support for offline listening
- Mood history tracking over time

---

## 👤 Author

**Mandeep**
- GitHub: [@tagda-coder](https://github.com/tagda-coder)