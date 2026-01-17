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

Perfect — let’s extend the minimal Next.js project into a solid learning package with:

✅ Tailwind CSS
✅ Dynamic routes
✅ Server-Side Rendering (SSR)
✅ Static Site Generation (SSG)
✅ API Routes
✅ Clean folder structure

I’ll give you step-by-step setup + full example files so you can copy-paste and run.

Since you’ve been learning React → Next.js → TypeScript → Django API (from our past chats), this setup matches exactly your learning path.

⸻

🚀 1) Create Project

npx create-next-app@latest next-learning
cd next-learning

Choose:

TypeScript: Yes
ESLint: Yes
Tailwind: Yes
App Router: No (choose Pages Router for learning fundamentals)

Then run:

npm run dev


⸻

📁 2) Final Folder Structure

next-learning/
│
├── pages/
│   ├── index.tsx          (Home - SSG)
│   ├── about.tsx          (Static page)
│   ├── products/
│   │    └── [id].tsx      (Dynamic route + SSR)
│   └── api/
│        └── hello.ts
│
├── components/
│   └── Navbar.tsx
│
├── styles/
│   └── globals.css
│
└── tailwind.config.js


⸻

🎨 3) Tailwind already installed

globals.css should contain:

@tailwind base;
@tailwind components;
@tailwind utilities;


⸻

🧭 4) Navbar Component

components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
    </nav>
  );
}


⸻

🏠 5) Home Page (SSG Example)

pages/index.tsx

import Navbar from "@/components/Navbar";

type Post = { id: number; title: string };

export async function getStaticProps() {
  // pretend this comes from Django API later
  const posts: Post[] = [
    { id: 1, title: "Hello Next.js" },
    { id: 2, title: "Learning SSG" }
  ];

  return { props: { posts } };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Home (SSG)</h1>
        <ul className="mt-4">
          {posts.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

➡️ This page is pre-built at build time.

⸻

ℹ️ 6) About Page (Simple Static)

pages/about.tsx

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>Simple static route</p>
      </main>
    </>
  );
}


⸻

🔁 7) Dynamic Route + SSR

pages/products/[id].tsx

import Navbar from "@/components/Navbar";

type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  // pretend fetch from Django API
  const product: Product = {
    id,
    name: `Product ${id}`,
    price: 1000 * Number(id)
  };

  return { props: { product } };
}

export default function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Product (SSR)</h1>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: ¥{product.price}</p>
      </main>
    </>
  );
}

➡️ This page is rendered on every request — perfect later for Django API.

⸻

🔌 8) API Route

pages/api/hello.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Hello from API route" });
}

Test:

http://localhost:3000/api/hello


⸻

🌍 9) Global App Wrapper

pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


⸻

✅ What You Now Have

Feature	Example	Purpose
Routing	/about	Static route
Dynamic routing	/products/1	URL params
SSG	Home page	Prebuilt SEO pages
SSR	Product page	Real-time data
API routes	/api/hello	Backend inside Next
Tailwind	Utility CSS	Fast UI building


⸻

🎯 Why this setup is perfect for your goal

From our previous discussion:
	•	React → Next.js → TypeScript ✔️
	•	Django as API backend ✔️
	•	Next.js handles SEO + frontend ✔️
	•	Django handles secure data ✔️

This project is exactly the frontend half of that architecture.

Later, you’ll just replace:

const product = {...}

with:

await fetch("https://your-django-api/products/" + id)


⸻

🚀 Want Next Steps?

I can give you next upgrades:

✅ Connect to real Django REST API
✅ Authentication (JWT)
✅ Deploy to Vercel
✅ Production folder structure

Just say:
“Next step: Django API”

and I’ll build that package too.

You’re progressing exactly on the right path 👍

