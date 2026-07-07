# TrendNest

An ecommerce frontend built with React, Redux Toolkit, Tailwind CSS, React Hook Form, and Zod, backed by a `json-server` mock API for local development.

---

## Features

### Authentication & Authorization

* User Registration
* User Login (mock auth against `json-server`, token stored in `localStorage`)
* Protected Routes (dashboard and admin pages require login)
* Logout (clears stored session)

### Product Management

* Admin: Create Product
* Admin: Edit Product

### User Management

* Admin: Create User
* Admin: Edit User

### In Progress

* Product listing / product detail pages (currently placeholders)
* Shopping cart (Redux slice scaffolded, no actions yet)
* Wishlist, checkout, payments, order history

---

## Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Hook Form
* Zod
* Axios

### Mock Backend

* json-server (`db.json`)

---

## Project Architecture

```
src/
├── api/                 # (removed — consolidated into service/axios.js)
├── components/
│   ├── common/          # Button, Input, Checkbox, Divider, Spinner, ErrorBoundary
│   └── layout/           # Navbar
├── feature/
│   ├── admin/            # CreateProduct, UpdateProduct
│   ├── auth/
│   │   └── pages/         # Login, Register
│   ├── pages/             # Home, Product, Dashboard
│   └── users/             # CreateUser, UpdateUser
├── routes/                # Public, Admin, ProtectedRoutes
├── schemas/               # zod schemas
├── service/               # axios instance
├── store/                 # Redux Toolkit store, slices, actions
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```
git clone <repo-url>
```

Install dependencies:

```
npm install
```

Start the mock API (json-server) using `db.json`, then start the dev server:

```
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_BASE_URL=http://localhost:3000
```

---

## Roadmap

* [x] Authentication System (mock, via json-server)
* [x] Protected Routes
* [x] Admin Product CRUD (create/edit)
* [x] Admin User CRUD (create/edit)
* [ ] Product Catalog (listing + detail pages)
* [ ] Shopping Cart
* [ ] Wishlist
* [ ] Checkout / Payments
* [ ] Order Management
* [ ] Production deployment

---

## Author

Prem Sawle

Frontend Developer | MERN Stack Developer | AI Application Developer

Open to freelance opportunities, remote collaborations, and international projects.
