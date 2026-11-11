import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Customer/Home'
import ExploreTiffins from './Pages/Customer/ExploreTiffins'
import TiffinDetails from './Pages/Customer/TiffinDetails'
import Cart from './Pages/Customer/Cart'
import Checkout from "./Pages/Customer/Checkout";
import MyOrders from "./Pages/Customer/MyOrders";
import CustomerProfilee from "./Pages/Customer/CustomerProfilee";
import Login from "./Pages/Customer/Login.jsx";
import Signup from "./Pages/Customer/Signup.jsx";
import ForgotPassword from "./Pages/Customer/ForgotPassword.jsx";
import AboutUs from "./Pages/Customer/AboutUs.jsx";
import Contact from "./Pages/Customer/Contact.jsx";
import Wishlist from "./Pages/Customer/Wishlist.jsx";
import Subscription from './Pages/Customer/Subscription';
import SubscriptionCheckout from "./Pages/Customer/SubscriptionCheckout";
import MySubscriptions from "./Pages/Customer/MySubscriptions";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/explore-tiffin' element={<ExploreTiffins />} />
            <Route path='/tiffin-details/:id'  element={<TiffinDetails />}/>
            <Route path='/cart' element={<Cart />}   />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/profile" element={<CustomerProfilee />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/subscription-checkout" element={<SubscriptionCheckout />}/>
            <Route path="/my-subscriptions" element={<MySubscriptions />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
