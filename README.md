<h1 align="center">🛍️ Venprom Client</h1>
<p align="center">
  A modern e-commerce frontend application built with Next.js, designed for commercial production use.
</p>

<p align="center">
  <a href="https://venprom-client.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-venprom--client.vercel.app-blue?style=flat-square" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/github/languages/top/MuratOfficial/venprom-client?style=flat-square" alt="Top Language" />
  <img src="https://img.shields.io/github/license/MuratOfficial/venprom-client?style=flat-square" alt="License" />
</p>

---

## 📌 Overview

**Venprom Client** is a feature-rich e-commerce frontend application developed using **Next.js** and **Tailwind CSS**. It serves as the client-side interface for the Venprom platform, offering users a seamless shopping experience with dynamic product listings, user authentication, and more.

---

## 🧰 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **TypeScript**: For type safety and enhanced developer experience
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Features

- 🛒 Dynamic product listings and categories
- 🔍 Advanced search and filtering options
- 👤 User authentication and profile management
- 🛍️ Shopping cart and checkout process
- 📦 Order history and tracking
- 📱 Responsive design for mobile and desktop
- ⚡ Fast performance with optimized loading

---

## 📦 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database (or any supported by Prisma)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MuratOfficial/venprom-client.git
   cd venprom-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
  Create a `.env` file in the root directory and configure the necessary variables:
  
  ```env
  DATABASE_URL=your_database_connection_string
  NEXT_PUBLIC_API_URL=your_api_endpoint
  ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
  The application will be available at `http://localhost:3000`

---

## 🗂️ Project Structure

```text
venprom-client/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and libraries
├── prisma/              # Prisma schema and migrations
├── public/              # Static assets
├── services/            # API service functions
├── styles/              # Global styles
├── .env                 # Environment variables
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🙌 Acknowledgements
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](http://prisma.io/docs)
- [Vercel](https://vercel.com/)
