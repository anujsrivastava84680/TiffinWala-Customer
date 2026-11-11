# Tiffin Service Marketplace

A modern Tiffin Service Marketplace built using React.js and Vite. This platform connects customers with home chefs and tiffin service providers, making it easier to discover homemade food, explore meal options, place orders, and manage subscriptions.

Currently, the project focuses on the **Frontend using React.js, CSS, React Router, and LocalStorage**. Backend and database integration are planned for future development.

---

## 1. Project Overview

The Tiffin Service Marketplace is designed to provide a digital platform where customers can discover homemade food services offered by home chefs and food providers.

Customers can explore available tiffins, view food details, add items to their cart, place demo orders, manage their profiles, save favorite tiffins, and purchase subscription plans.

The platform is planned to have three main roles:

1. **Customer:** Explores tiffins, places orders, manages subscriptions and profiles.
2. **Sub-Admin (Home Chef / Food Provider):** Manages food listings and customer orders, accepts or rejects orders, and handles delivery.
3. **Admin:** Manages the overall platform, customers, food providers, orders, and platform activities.

The Customer Panel frontend is currently developed.

---

## 2. Main Objectives

- Connect customers with local home chefs and tiffin providers.
- Make homemade food easily accessible.
- Provide an easy-to-use food discovery experience.
- Allow customers to manage orders and subscriptions.
- Provide a platform for home chefs to offer their food services.
- Create a user-friendly and responsive interface.

---

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| JavaScript | Application functionality |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| React Router DOM | Page navigation |
| React Icons | Icons |
| LocalStorage | Demo data storage in browser |
| npm | Package management |
| Git & GitHub | Version control |

---

## 4. Project Folder Structure

```text
Tiffin-Service/
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── Components/
│   │   │   └── Customer/
│   │   │       ├── Header.jsx
│   │   │       ├── Footer.jsx
│   │   │       ├── CategorySection.jsx
│   │   │       └── CSS/
│   │   │
│   │   ├── Pages/
│   │   │   └── Customer/
│   │   │       ├── Home.jsx
│   │   │       ├── ExploreTiffins.jsx
│   │   │       ├── TiffinDetails.jsx
│   │   │       ├── Cart.jsx
│   │   │       ├── Checkout.jsx
│   │   │       ├── MyOrders.jsx
│   │   │       ├── CustomerProfilee.jsx
│   │   │       ├── Login.jsx
│   │   │       ├── Signup.jsx
│   │   │       ├── ForgotPassword.jsx
│   │   │       ├── Wishlist.jsx
│   │   │       ├── Subscription.jsx
│   │   │       ├── SubscriptionCheckout.jsx
│   │   │       ├── MySubscriptions.jsx
│   │   │       ├── AboutUs.jsx
│   │   │       ├── Contact.jsx
│   │   │       │
│   │   │       └── CSS/
│   │   │           ├── Home.css
│   │   │           ├── ExploreTiffins.css
│   │   │           ├── TiffinDetails.css
│   │   │           ├── Cart.css
│   │   │           ├── Checkout.css
│   │   │           ├── MyOrders.css
│   │   │           ├── CustomerProfilee.css
│   │   │           ├── Login.css
│   │   │           ├── Signup.css
│   │   │           ├── ForgotPassword.css
│   │   │           ├── Wishlist.css
│   │   │           ├── MySubscriptions.css
│   │   │           ├── AboutUs.css
│   │   │           └── Contact.css
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── index.html
│
├── Backend/
│   └── (Backend development planned)
│
└── README.md
```

*Note: This is the planned/known folder structure. Keep the names aligned with the actual files in your project.*

---

## 5. Customer Panel Features

### 5.1 Home Page

- Attractive hero section.
- Food categories.
- Popular tiffin listings.
- Special offers.
- Popular home chefs.
- Subscription plans.
- How It Works section.
- Why Choose Us section.
- Customer testimonials.
- FAQ section.
- Newsletter section.

### 5.2 Explore Tiffins

- Browse available tiffins.
- Search for food items.
- Filter tiffins by category.
- View food prices and ratings.
- View home chef information.
- Open individual tiffin details.
- Add or remove tiffins from Wishlist.

### 5.3 Tiffin Details

- View individual tiffin information.
- View food image and description.
- Check price and chef details.
- Select quantity.
- Add tiffins to Cart.

### 5.4 Shopping Cart

- View selected food items.
- Increase or decrease quantity.
- Remove items.
- Calculate subtotal.
- Calculate delivery charges.
- View total amount.
- Proceed to Checkout.

### 5.5 Checkout

- Enter customer information.
- Enter delivery address.
- Select saved delivery addresses.
- View order summary.
- Select Cash on Delivery or demo online payment.
- Place an order.

### 5.6 My Orders

- View placed orders.
- Check order status.
- Filter orders.
- View order details.
- Cancel eligible orders.
- Reorder previous items.
- Write or edit reviews for delivered orders.

### 5.7 Customer Profile

- View and update personal information.
- Manage delivery address.
- Add new addresses.
- Edit saved addresses.
- Delete addresses.
- Set a default delivery address.

### 5.8 Authentication

- Customer Signup.
- Customer Login.
- Forgot Password.
- New Password creation.
- Password confirmation.
- Logout functionality.

### 5.9 Wishlist

- Save favorite tiffins.
- View saved items.
- Remove individual items.
- Clear Wishlist.
- Open tiffin details.

### 5.10 Subscription

- Explore subscription plans.
- Select a subscription plan.
- Complete demo subscription checkout.
- View My Subscriptions.
- Pause subscriptions.
- Resume subscriptions.
- Cancel subscriptions.
- View subscription history.

### 5.11 Other Pages

- About Us.
- Contact Us.
- Responsive Header and Footer.

---

## 6. Application Routes

The following Customer Panel routes are used in the application:

| Page | Route |
|---|---|
| Home | `/` |
| Explore Tiffins | `/explore-tiffin` |
| Tiffin Details | `/tiffin-details/:id` |
| Cart | `/cart` |
| Checkout | `/checkout` |
| My Orders | `/my-orders` |
| Customer Profile | `/profile` |
| Login | `/login` |
| Signup | `/signup` |
| Forgot Password | `/forgot-password` |
| Wishlist | `/wishlist` |
| Subscription | `/subscription` |
| Subscription Checkout | `/subscription-checkout` |
| My Subscriptions | `/my-subscriptions` |
| About Us | `/about` |
| Contact Us | `/contact` |

*Check App.jsx if any route has a different path in the actual project.*

---

## 7. How to Install and Run the Project

### Step 1: Install Node.js

Download and install Node.js from:

https://nodejs.org/

Check installation:

```bash
node -v
npm -v
```

### Step 2: Open the Project

Open the project folder in VS Code.

```bash
cd D:/Tiffin-Service/Frontend
```

### Step 3: Install Dependencies

Run:

```bash
npm install
```

This installs all dependencies listed in package.json.

### Step 4: Start the Development Server

Run:

```bash
npm run dev
```

Vite will display a local URL, usually:

```text
http://localhost:5173/
```

Open that URL in your browser.

### Step 5: Stop the Server

Press:

```text
Ctrl + C
```

---

## 8. How to Use the Website

### Customer Workflow

1. Open the website.
2. Explore available tiffins from the Home Page or Explore Tiffins page.
3. Search or filter food items.
4. Open a tiffin to view its details.
5. Add the selected tiffin to Cart.
6. Open Cart and manage quantities.
7. Proceed to Checkout.
8. Enter delivery information or select a saved address.
9. Select a demo payment method.
10. Place the order.
11. Visit My Orders to check order details and status.
12. After an order is marked Delivered, submit a review.
13. Manage your profile and saved addresses.
14. Save favorite tiffins in Wishlist.
15. Explore subscription plans and manage subscriptions.

---

## 9. LocalStorage Data Management

The current frontend uses browser LocalStorage to store demo information.

| LocalStorage Key | Purpose |
|---|---|
| `cart` | Cart items |
| `wishlist` | Wishlist items |
| `orders` | Customer orders |
| `customerProfile` | Customer profile information |
| `customerAddresses` | Saved delivery addresses |
| `registeredUsers` | Demo registered customer accounts |
| `currentUser` | Currently logged-in customer information |
| `isLoggedIn` | Demo login status |
| `tiffinReviews` | Customer reviews |
| `subscriptions` | Customer subscription information |

### How to View LocalStorage Data

1. Open the website in Chrome.
2. Press `F12`.
3. Open the Application tab.
4. Select Local Storage.
5. Select your local website URL.
6. View the stored keys and values.

**Important:** Clearing browser LocalStorage will remove the saved demo data.

---

## 10. Current Project Limitations

The current project is a frontend demonstration.

- Data is stored in browser LocalStorage.
- Authentication is not connected to a secure backend.
- Forgot Password does not send an actual email.
- Online payment is not connected to a real payment gateway.
- Orders are not stored in a server database.
- Food listings currently use demo/static data.
- Different users do not have secure, isolated server-side accounts.
- Subscription payments and renewals are not real transactions.

Do not use this demo authentication or payment system for real customer transactions.

---

## 11. Future Development

The following features are planned for future development:

### Sub-Admin Panel (Home Chef / Food Provider)

- Sub-Admin registration and login.
- Food provider dashboard.
- Add, edit and delete tiffins.
- Manage food categories.
- View incoming orders.
- Accept or reject orders.
- Update order status.
- Manage customer orders.
- Handle personal delivery.
- View earnings and order history.
- Manage profile and availability.

### Admin Panel

- Admin dashboard.
- Manage customers.
- Manage food providers.
- Approve or reject food providers.
- Manage all tiffins.
- Manage categories.
- Manage orders.
- Manage subscriptions.
- Monitor platform activity.
- View reports and analytics.

### Backend Development

- Node.js.
- Express.js.
- MongoDB.
- Mongoose.
- REST APIs.
- Secure authentication and authorization.
- Image upload.
- Real payment gateway integration.
- Email verification and password reset.
- Database-based order and subscription management.

---

## 12. Project Development Status

| Module | Status |
|---|---|
| Customer Panel Frontend | Completed |
| Customer Panel Testing | Completed |
| Sub-Admin Panel | Planned |
| Admin Panel | Planned |
| Backend Integration | Planned |
| Database Integration | Planned |
| Real Payment Integration | Planned |

---

## 13. Contributing

Contributions and suggestions are welcome.

If you want to improve this project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Submit a Pull Request.

---

## 14. Author

**Project:** Tiffin Service Marketplace

**Developer:** Anuj Srivastava

**Course:** Bachelor of Computer Applications (BCA)

**Technology:** React.js, JavaScript, CSS3 and Vite

---

## 15. License

This project is currently developed for educational and learning purposes. Licensing and production usage terms can be defined before public deployment.

---

**Thank you for visiting the Tiffin Service Marketplace project!**
