

# Project Title

**CodeForcer Peer Site Frontend**

---

## 📋 Description

This frontend application serves as the user-interface for the CodeForcer Peer Site — a platform aimed at showcasing user profiles, peer networks, and real-time analytics of users from the Codeforces platform. It allows logged-in users to explore peer data, filter by affiliations (organizations/universities), and engage with a social & analytics dashboard.

---

## 🧠 Features

* Fetches and displays user profile data from Codeforces.
* Search and filter by handle, organization (university/company), country, rank.
* Dashboard showing peer connections, contributions, organization-based user lists.
* Responsive UI with Tailwind CSS (or whichever UI framework you’re using).
* Optional real-time updates / WebSocket integration for user status (if implemented).
* Authentication (if implemented) and user specific views.

---

## 📂 Technology Stack

* **Frontend:** Built with Next.js (App Router) + React
* Styling: Tailwind CSS v4
* Optional CMS/Admin: Sanity / Strapi or custom admin panel
* Data layer: Uses the GraphQL API or REST endpoints to fetch from Codeforces
* Build & Deploy: Vercel, Netlify, or other static host

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* npm or Yarn
* Git

### Installation

```bash
git clone https://github.com/pankajkoree/codeforcerpeersite-frontend.git
cd codeforcerpeersite-frontend
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 🛠️ Configuration

* Create a `.env.local` file in the project root with the following variables:

  ```env
  NEXT_PUBLIC_API_BASE_URL=https://api.codeforcerpeersite.com
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=your_secret_here
  ```
* If using a CMS or external API, set credentials likewise.

---

## 📁 Project Structure

```
src/
  app/
    page.tsx         # Entry point
    layout.tsx       # App layout
    components/      # Reusable UI components
    features/        # Domain specific modules (users, peers, org filter)
  lib/               # Utils, API clients, hooks
  styles/            # Global and theme styles
  public/            # Static assets (images, icons)
```

---

## ✅ Contribution Guidelines

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/your-name`
3. Commit your changes: `git commit -m "feat: your description"`
4. Push to the branch and open a Pull Request.
5. Ensure you’ve added tests (if required) and updated documentation.


