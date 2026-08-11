# React Starter Project

A minimal, batteries-included React starter template powered by **Webpack 5** and **Babel 7**.  
Clone it, install, and start building — JSX, CSS, images, SVGs, and fonts all work out of the box.

---

## ✨ Features

| Feature | Details |
|---|---|
| **React 19** | Latest React with automatic JSX runtime |
| **Webpack 5** | Fast bundling with dev server, HMR & live reload |
| **Babel 7** | `@babel/preset-env` + `@babel/preset-react` (automatic runtime) |
| **JSX** | `.js` and `.jsx` extensions both resolved automatically |
| **CSS** | Import `.css` files directly into components |
| **Images** | Import `.png`, `.jpg`, `.gif`, `.webp` as asset resources |
| **SVG** | Import `.svg` files as asset resources |
| **Fonts** | Import `.woff`, `.woff2`, `.eot`, `.ttf`, `.otf` |

---

## 🚀 Quick Start

### Clone into a custom directory (prompted)

Run this one-liner — it will ask you where to clone:

```bash
read -p "Enter target directory: " dir && git clone https://github.com/akashramesh13/react-starter-project.git "$dir" && cd "$dir" && npm install && npm start
```

### Or clone with a directory name directly

```bash
git clone https://github.com/akashramesh13/react-starter-project.git my-app
cd my-app
npm install
npm start
```

The dev server will start on **http://localhost:5000** with hot-reloading enabled.

---

## 📁 Project Structure

```
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── index.jsx           # App entry point
│   └── components/
│       └── App.jsx          # Root component
├── .babelrc                # Babel configuration
├── webpack.config.js       # Webpack configuration
├── package.json
└── README.MD
```

---

## 🛠 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Webpack dev server (development mode) |

---

## 📦 Adding New Components

Create `.jsx` files anywhere under `src/` — they are resolved automatically:

```jsx
// src/components/Button.jsx
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

Import assets directly in JSX:

```jsx
import logo from "../assets/logo.png";
import "./Button.css";

const Button = () => <img src={logo} alt="Logo" />;
```

---

## 📝 License

[MIT](./LICENSE) © Akash Ramesh
