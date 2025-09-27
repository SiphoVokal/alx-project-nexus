# E-Commerce Site – Process Documentation

## Overview
This project is a modern **Next.js + Tailwind CSS** e-commerce site built with a focus on responsiveness, performance, and clean UI/UX.  
Over the past 2 weeks, I have incrementally designed, built and debugged features such as product listings, dynamic routing, cart/checkout flow, filtering/sorting, and deployment setup.

---

## Tech Stack
- **Frontend Framework**: [Next.js ( Pages Router)](https://nextjs.org/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **UI Components**: custom components  
- **State Management**: React Context API (`useCart`)  
- **API Management**: Fetching products client-side with useEffect
- **Image Handling**: `next/image` for optimization  
- **Deployment**: Netlify  

---

## Key Features Implemented
### 1. Product Listing
- Dynamic product cards with images, names, and prices.
- Links to product detail pages via **dynamic routing** (`/products/[id]`).

### 2. Product Details
- Implemented `ProductPage` for individual product views.
- Debugged **`undefined` errors** when `id` parsing mismatched data types.

### 3. Cart & Checkout
- `useCart` context for global cart state.
- Cart page showing:
  - Product items with images, names, and prices.
  - Item quantity and removal actions.
- Checkout summary:
  - Displays **total item count** and **total price** (bug fixed by explicitly tracking state updates).

### 4. Filter & Sort
- Implemented sorting for accessories:
  - **Ascending / Descending** by price.
- Used `useMemo` for performance to avoid unnecessary re-renders.

### 5. Responsive Hero & Assets
- Adjusted hero image behavior:
  - Handled **mobile vs desktop image swapping**.
  - Fixed `next/image` type errors (`srcSet` issue).

### 6. SEO & Content
- Converted articles to **SEO-optimized posts**:
  - Added metadata and structured JSON-LD schema.
- Planned blog/news integration with indexable routes.

### 7. Store Locator
- Built **Stores page**:
  - Interactive Google Maps embed.
  - Custom multiple pins (e.g., Gauteng malls).
  - Fake store data for testing.

### 8. Deployment Issues Fixed
- Netlify build failed due to missing `tailwind-merge` dependency.
  - Solution: Ensure package is in `dependencies` (not only `node_modules`) and lockfile is consistent.  
- ESLint / Turbopack root warnings addressed by cleaning duplicate lockfiles and updating Next.js config.

---

## Issues & Fixes
| Issue | Fix |
|-------|-----|
| Checkout always shows 1 item | Explicitly update cart state when adding/removing items. |
| Image sizing/type errors | Adjust `next/image` usage (`fill`, `sizes`, responsive). |
| Netlify build fails | Ensure dependencies listed in `package.json` and lockfile is synced. |


---

## 🚀 Development Workflow
1. **Feature Branching**  
   Each feature/fix (e.g., cart, product detail, sorting) is worked on in a dedicated branch.  
2. **Testing in Local Dev**  
   Run with `npm run dev` and test across desktop + mobile breakpoints.  
3. **Deployment**  
   Deployed to **Netlify**, monitoring build logs for dependency issues.  
4. **Iterative Fixes**  
   Adjusted based on errors (dynamic routing, image handling, ESLint warnings).  

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).
