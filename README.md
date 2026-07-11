# 🛒 Full-Stack E-Commerce Platform & Admin Dashboard

An enterprise-grade, fully responsive **E-Commerce Application** seamlessly integrated with a powerful **Admin Dashboard**. This project demonstrates industry-standard development practices for modern React.js applications, focusing on scalable state management, real-time data synchronization, secure checkout processes, and a clean folder structure.

---

## 🌟 Key Features

### 🛍️ Client-Side (E-Commerce Storefront)
* **Authentication:** Secure registration, login, and logout using Firebase/Supabase (including Google OAuth).
* **Advanced Filtering & Search:** Real-time search bar with dynamic product filtering by category, price range, and ratings.
* **Persistent Smart Cart:** Fully functional shopping cart with instant subtotal/total calculations, synced automatically with `localStorage`.
* **Interactive Wishlist:** Quick-save favorite items to a personalized wishlist.
* **Stripe Payment Integration:** Integrated sandbox payment gateway utilizing Stripe API for secure test transactions.
* **Dynamic Order Tracking:** Customer dashboard displaying order history and real-time fulfillment status (*Pending, Shipped, Delivered*).
* **UX Enhancements:** Interactive "Free Shipping" progress bar, loading skeletons, and smooth animations using Tailwind CSS.

### 📊 Management-Side (Admin Dashboard)
* **Analytical Overview:** Interactive analytics charts (Sales Trends, Top Categories, User Growth) powered by `Recharts`.
* **Full CRUD Product Management:** Datatable interface to create, read, update, and delete products, including image upload handlers.
* **Order Fulfillment System:** Real-time tracking of customer orders with the ability to update shipping and delivery status.
* **Role-Based Access Control (RBAC):** Restrict access to the dashboard route exclusively to authorized Admin accounts.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Library:** React.js (Scaffolded with **Vite** for optimized build performance)
* **Styling:** Tailwind CSS (utility-first typography and layout customization)
* **State Management:** Redux Toolkit (global cart management, async product fetching) & React Context API
* **Backend & Database:** Firebase / Supabase (Firestore NoSQL/PostgreSQL, Authentication, and Cloud Storage)
* **Charts:** Recharts
* **Payments:** Stripe API (Test Environment)

---

## 📂 Project Structure

The codebase adheres to clean code principles and a modular architectural pattern:
Code output
README.md generated successfully.

```
N Commerse/
├── public/
└── src/
    ├── assets/          # Shared images, icons, and static assets
    ├── components/      # Reusable atomic UI elements (Buttons, Cards, Modals)
    ├── context/         # Lightweight global context states (e.g., Theme, Auth)
    ├── hooks/           # Custom React Hooks (e.g., useAuth, useFetch)
    ├── layouts/         # Persistent structural wrappers (Navbar, Sidebar, Footer)
    ├── pages/           # Page-level components (Home, ProductDetails, Checkout, Dashboard)
    ├── services/        # API configurations and service layer modules (Axios, Firebase config)
    ├── utils/           # Helper functions (Date formatting, input validation, currency formatting)
    ├── App.jsx          # Main application element & React Router configuration
    ├── main.jsx         # Application entry point
    └── index.css        # Global styles & Tailwind configuration
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
