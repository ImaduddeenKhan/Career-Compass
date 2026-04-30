<div align="center">
  <img src="public/career-logo.png" alt="Career Compass Logo" width="120" height="120" />

  <h1>Career Compass</h1>

  <p><strong>AI-powered career guidance that turns uncertainty into a clear next step.</strong></p>
  <p>Personalized job, course, and AI assessment recommendations built to help learners and job seekers make confident decisions.</p>

  <p>
    <img alt="Build" src="https://img.shields.io/badge/build-local%20only-8A2BE2?style=for-the-badge" />
    <img alt="License" src="https://img.shields.io/github/license/ImaduddeenKhan/Career-Compass?style=for-the-badge" />
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css" />
  </p>
</div>

---

## 🚀 Project Overview
Career Compass is a modern, AI-first career guidance platform. It blends personalized assessments, curated work and course recommendations, and downloadable career reports to help users move from “what should I do?” to “here’s my next step.”

**At a glance (1‑minute overview):**
- **What it does:** AI career test + tailored job and course recommendations.
- **Why it matters:** Reduces decision paralysis and gives clear, actionable direction.
- **Key features:** AI assessment, role/course matching, filters, PDF report.
- **Tech stack:** Next.js, React, TypeScript, Tailwind, MongoDB, Firebase, Gemini AI.

## ✨ Features
- **AI Career Test** with dynamic MCQ/text questions (Gemini-powered).
- **Personalized recommendations** for jobs and education paths.
- **Smart filters** by location, budget, timeline, and course type.
- **Downloadable PDF career report** with insights and action items.
- **Authentication** via Google and credentials.
- **Responsive, polished UI** with modern components and animations.

## 🧠 Problem & Solution
**Problem:** Students and early‑career professionals often feel overwhelmed by unclear career options, scattered resources, and generic advice.  
**Solution:** Career Compass provides a guided, AI-driven pathway—from assessing interests and skills to delivering targeted job and course recommendations—so users can act with confidence.

## 🛠 Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS, Radix UI / shadcn-ui, Framer Motion
- **AI & Reports:** Google Gemini (Generative AI), jsPDF
- **Data:** MongoDB + Mongoose, Firebase Firestore
- **Auth:** NextAuth (Google + credentials)

## 📸 Screenshots / Demo
<img src="public/heroimg2.png" alt="Career Compass Hero" />

> Demo link: _Add deployment URL here when available._

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB connection string
- Firebase project + keys
- Google OAuth credentials
- Gemini API key

### 1) Clone and install
```bash
git clone https://github.com/ImaduddeenKhan/Career-Compass.git
cd Career-Compass
npm install --legacy-peer-deps
```

### 2) Environment variables
Create a `.env.local` file in the project root:
```bash
MONGODB_URL=your_mongodb_connection_string
NEXT_PUBLIC_GEMINI_API=your_gemini_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_FIREBASE_API=your_firebase_api_key
NEXT_PUBLIC_authDomain=your_firebase_auth_domain
NEXT_PUBLIC_projectId=your_firebase_project_id
NEXT_PUBLIC_storageBucket=your_firebase_storage_bucket
NEXT_PUBLIC_messagingSenderId=your_firebase_messaging_sender_id
NEXT_PUBLIC_appId=your_firebase_app_id
NEXT_PUBLIC_measurementId=your_firebase_measurement_id
```

### 3) Run locally
```bash
npm run dev
```
Open http://localhost:3000 to view the app.

## 📂 Project Structure
```
app/                Next.js App Router pages and API routes
components/         UI and feature components
hooks/              Reusable React hooks
lib/                AI, auth, database, and utility logic
models/             Mongoose schemas for courses, jobs, skills, users
public/             Static assets (logo, hero image)
styles/             Global styles
types/              TypeScript type definitions
```

## 🔮 Future Improvements
- Add user dashboards with saved recommendations and progress tracking.
- Expand AI assessments with multi‑language support.
- Introduce admin tooling for data curation and analytics.
- Integrate live job boards and course platforms.

## 🤝 Contribution Guidelines
Contributions are welcome!
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License
Licensed under the [MIT License](LICENSE).
