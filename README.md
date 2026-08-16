# 🌍 Where in the World? — Country Guide App

An interactive web app that shows detailed information about every country in the world — name, flag, population, capital, languages, currencies, and more — with search, filtering, and navigation between neighboring countries.

---

## ✨ Features

- 🔍 **Live search** for any country by name as you type
- 🌎 **Filter by region** (Africa, Americas, Asia, Europe, Oceania)
- 🌗 **Dark / Light Mode** with the user's preference saved in the browser
- 📄 **Country detail page** showing:
  - Flag, native name, population
  - Region, sub-region, and capital
  - Top level domain, currencies, and languages
  - **Border countries** as clickable buttons that navigate directly to their details
- 📱 **Fully responsive design** — works on mobile, tablet, and desktop
- ⚡ Fast performance powered by Vite

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | Building the user interface |
| [Vite](https://vite.dev/) | Fast build tool and dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing (HashRouter) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling and layout |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | Deployment to GitHub Pages |

---

## 📂 Project Structure

```
src/
├── assets/            # Static images and files
├── Data/
│   └── data.json      # Country data (name, flag, capital, population...)
├── Layout/
│   └── Layout.jsx      # Shared layout (Navbar + Outlet)
├── App.jsx             # Main route definitions
├── Cart.jsx             # Home page (search + filter + country grid)
├── DetailCart.jsx       # Country detail page
├── Navbar.jsx            # Header + dark mode toggle button
├── Noutfount.jsx          # 404 Not Found page
├── index.css              # Global color variables (Light/Dark)
└── main.jsx                # App entry point
```

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/ammar-2005/Country-guide-app.git
cd Country-guide-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

---

## 📦 Build & Deploy

```bash
# Build the production version
npm run build

# Deploy directly to GitHub Pages
npm run deploy
```

---

## 🎨 How Dark/Light Mode Works

Colors are defined as CSS custom properties (`--color-background`, `--color-foreground`, `--color-card`, etc.) in `index.css`. When the toggle button is clicked, a `dark` class is added to the `<html>` element. Since the same variables are redefined inside `.dark`, every component that uses them (`bg-background`, `text-foreground`, `bg-card`, ...) automatically switches colors — no need to add a `dark:` variant on every single class. The user's choice is saved in `localStorage` so it persists across visits.

---

## 🗺️ Roadmap

- [ ] Add a compare page to view two or more countries side by side
- [ ] Add Arabic language support (i18n)
- [ ] Add an interactive map showing each country's location
- [ ] Add pagination or infinite scroll for better performance with large datasets

---

## 👤 Author

**Ammar**
---

## 📄 License

This project is open source and free to use and modify.
