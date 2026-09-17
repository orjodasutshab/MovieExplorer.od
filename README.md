# 🎬 MovieExplorer — Modern Movie Discovery & Streaming Web App

> A sleek, responsive, and feature-rich movie exploration web application built with modern React, TypeScript, and Tailwind CSS.

---

## 📌 Project Overview

**MovieExplorer** is an interactive movie discovery platform designed for cinema lovers to search, filter, and explore trending and popular movies across various genres. With a cinema-inspired user interface, fluid responsive design, and dynamic navigation, users can effortlessly discover movie summaries, ratings, release years, and detailed overviews.

---

## 🚀 Live Demo & Links

- **Live Preview:** https://movie-explorer-od.vercel.app/
- **GitHub Repository:** https://github.com/orjodasutshab/MovieExplorer.od.git

---

## ✨ Key Features

### 🌟 1. Dynamic Hero Banner
- High-definition cinematic movie banner backdrop.
- Crystal-clear visual presentation with engaging heading and a direct **"Explore Now"** Call-to-Action (CTA).

### 🧭 2. Clean & Unified Navigation Bar
- Modern brand badge featuring a custom film-reel icon and bold typography.
- Cohesive navigation pill tabs (`Home` and `Movies`) with active state indicators and hover feedback.
- Fully responsive mobile drawer navigation for smaller screens.

### 🔍 3. Movie Search & Filter System
- **Real-time Search:** Instantly search movies by title.
- **Genre Filtering:** Filter movies by Action, Sci-Fi, Drama, Adventure, Animation, and more.
- **Sorting Options:** Sort movies by release date, popularity, or IMDb ratings.

### 🎞️ 4. Comprehensive Movie Cards & Details
- Detailed posters, movie titles, release years, genres, and ratings.
- Modal view showing storyline, director, cast, runtime, and trailer preview.
- Interactive watchlist/favorites option.

### 📱 5. Fully Responsive Design
- Optimized for all viewport sizes (Mobile, Tablet, Laptop, and Ultra-wide Desktop displays).
- Accessible contrast ratios and touch-friendly targets.

### 📄 6. Professional Footer
- Includes branding, quick navigational links, and developer credentials.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling Framework** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icon Library** | [Lucide React](https://lucide.dev/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Package Manager** | npm |

---

## 📂 Project Structure

```text
movie-explorer/
├── public/                  # Static assets (images, banners, logo SVG)
│   ├── custom-hero.png      # High-res featured hero banner
│   ├── logo.svg             # Vector movie reel brand icon
│   └── favicon.ico          # Browser tab icon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Header with responsive navigation
│   │   ├── HeroBanner.tsx   # Cinematic top hero section
│   │   ├── MovieCard.tsx    # Individual movie display card
│   │   ├── MovieList.tsx    # Grid layout of movies
│   │   ├── MovieModal.tsx   # Detailed modal dialog
│   │   ├── SiteLogo.tsx     # Reusable SVG logo wrapper
│   │   └── Footer.tsx       # Application footer
│   ├── data/
│   │   └── movies.ts        # Structured movie dataset
│   ├── types/
│   │   └── movie.ts         # TypeScript interfaces & types
│   ├── App.tsx              # Main application controller
│   ├── main.tsx             # React DOM root entry
│   └── index.css            # Tailwind CSS root imports
├── index.html               # Entry HTML with meta tags
├── package.json             # Dependencies and build scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # Project documentation
```

---

## ⚙️ Getting Started / Local Setup

Follow these steps to set up and run the project locally on your machine:

### 1. Clone the repository
```bash

```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:3000
```

### 4. Build for production
```bash
npm run build
```

---

## 📋 Assignment Requirements Checklist

- [x] **Single Page Application (SPA)** using React & TypeScript.
- [x] **Component-driven Architecture**: Clean separation into Navbar, Hero, Movie List, Cards, and Footer.
- [x] **Interactive Navigation**: Tab navigation between Home and Movie collections with persistent state.
- [x] **Responsive UI**: Tested across mobile, tablet, and desktop viewports.
- [x] **Clean Code Standards**: Typed props, no TypeScript warnings, strict linter compliance.
- [x] **Custom Branding**: Dedicated logo, modern color palette, and typography.

---

## 👨‍💻 Developer Information

- **Developer:** **Orjo Das Utshab**
- **Project:** MovieExplorer Assignment Project
- **Copyright:** © 2026 MovieExplorer. All rights reserved.

---

## 📄 License

This project is created for educational and assignment submission purposes.
