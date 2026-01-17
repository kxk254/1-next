# 1-next

npx create-next-app@latest 1-next --use-npm --eslint --tailwing -app 


Absolutely! We can make a **simple, self-contained Next.js learning package** with some example pages, API routes, and minimal setup so you can learn by playing with it. I’ll generate a ready-to-go project structure with code.

---

## 1️⃣ Project Structure

```
nextjs-learning/
├── package.json
├── next.config.js
├── pages/
│   ├── index.js
│   ├── about.js
│   └── api/
│       └── hello.js
├── components/
│   └── Navbar.js
├── styles/
│   ├── globals.css
│   └── Home.module.css
└── README.md
```

---

## 2️⃣ Files and Code

### `package.json`

```json
{
  "name": "nextjs-learning",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```

---

### `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
```

---

### `pages/index.js`

```jsx
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Welcome to Next.js Learning</h1>
      <p>This is the home page. Navigate to /about or call the API at /api/hello</p>
    </div>
  );
}
```

---

### `pages/about.js`

```jsx
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <p>This is a simple page to demonstrate Next.js routing.</p>
    </div>
  );
}
```

---

### `pages/api/hello.js`

```js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js API!" });
}
```

---

### `components/Navbar.js`

```jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </nav>
  );
}
```

---

### `styles/globals.css`

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
```

---

### `styles/Home.module.css`

```css
.container {
  padding: 2rem;
  text-align: center;
}
```

---

### `README.md`

````markdown
# Next.js Learning Package

## Setup

```bash
npm install
npm run dev
````

Open your browser at [http://localhost:3000](http://localhost:3000)

* `/` → Home page
* `/about` → About page
* `/api/hello` → API endpoint

````

---

## 3️⃣ How to Use

1. Create a folder:

```bash
mkdir nextjs-learning && cd nextjs-learning
````

2. Save all the files above in the folder with the same structure.
3. Install dependencies:

```bash
npm install
```

4. Run dev server:

```bash
npm run dev
```

5. Open in browser:

* `http://localhost:3000/` → Home page
* `http://localhost:3000/about` → About page
* `http://localhost:3000/api/hello` → API JSON response

---

This gives you a **minimal, fully working Next.js project** that covers:

* Pages (`index.js`, `about.js`)
* Routing
* Components (`Navbar.js`)
* API routes (`/api/hello`)
* CSS modules (`Home.module.css`)
* Global styles

---

If you want, I can **extend this package** with **Tailwind CSS, dynamic routes, and server-side data fetching** so it becomes a **more advanced learning environment**.

Do you want me to do that?

