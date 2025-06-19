# 💼 HR Dashboard

An interactive and modern HR dashboard built with **Next.js App Router**, **Tailwind CSS**, and **TypeScript**. It includes advanced features like search, filtering, employee detail tabs, light/dark mode, and more.

---

## 🚀 Features

- 🔍 Search employees by name, email, or department  
- 📂 Multi-select department filter with dropdown UI  
- 🌗 Dark/Light mode with system preference support  
- 🧑 Employee details page with tabbed layout: Overview, Projects, Feedback  
- ⭐ Dynamic star rating and color badge  
- 📌 Bookmark and promote actions with confirmation modals  
- ⚡ Lucide icons for modern UI  
- 🎨 Responsive design for all devices  

---

## 📁 Folder Structure

    app/
    ├── components/ # Reusable UI components (Cards, Filters, Buttons)
    ├── employee/[id]/ # Dynamic route for employee details
    ├── hooks/ # Custom hooks (e.g. useUsers, useSearch)
    ├── lib/ # Utility functions and mock data
    ├── store/ # Zustand store 
    └── page.tsx # Home page with search + filter
---

## 📦 Tech Stack

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)
- [dummyjson.com](https://dummyjson.com/) (for mock API)

---

## 🧠 Getting Started

### 1. Clone The Repository
    git clone https://github.com/your-username/hr-dashboard.git
    cd hr-dashboard

### 2. Install Dependencies
    npm install
### 3. Start the Development Server
    npm run dev
## Then open your browser and visit:
    http://localhost:3000
---
## 🧪 Scripts
    npm run dev      # Start development server
    npm run build    # Build for production
    npm run lint     # Run ESLint
---    
## 🖼️ Screenshots
### 1. Homepage LightMode
    https://github.com/user-attachments/assets/5c6d46e7-6ecf-4790-bc5f-befe9224826b
### 2. Homepage Dark Mode
    https://github.com/user-attachments/assets/895313b5-4e09-404a-8ba1-94f61dd9d723
### 3. Homepage Mobile 
    https://github.com/user-attachments/assets/09fd76c6-256f-42ff-bfdb-ed56740f6095
### 4. UserDetailPage
    https://github.com/user-attachments/assets/12a25d51-2c25-4aa7-a568-9de14f4337c8
### 5. BookMarkedEmployees    
    https://github.com/user-attachments/assets/b66c011b-cbc0-4119-9b8b-2abd299d6718


