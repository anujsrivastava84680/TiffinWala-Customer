
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../../Components/Customer/Header";
// import Footer from "../../Components/Customer/Footer";
// import "./CSS/Checkout.css";

// const Checkout = () => {
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([]);
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     landmark: "",
//   });

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) =>
//       total + Number(item.price || 0) * Number(item.quantity || 1),
//     0
//   );

//   const deliveryCharge = cartItems.length > 0 ? 20 : 0;
//   const grandTotal = subtotal + deliveryCharge;

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();

//     if (cartItems.length === 0) {
//       alert("Your cart is empty!");
//       navigate("/explore-tiffin");
//       return;
//     }

//     const order = {
//       orderId: `TIF${Date.now()}`,
//       customer: formData,
//       items: cartItems,
//       subtotal,
//       deliveryCharge,
//       totalAmount: grandTotal,
//       paymentMethod,
//       orderStatus: "Pending",
//       orderDate: new Date().toISOString(),
//     };

//     const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     localStorage.setItem(
//       "orders",
//       JSON.stringify([...oldOrders, order])
//     );

//     localStorage.setItem("cart", JSON.stringify([]));

//     window.dispatchEvent(new Event("cartUpdated"));

//     setOrderPlaced(true);
//   };

//   if (orderPlaced) {
//     return (
//       <>
//         <Header />

//         <div className="checkout-success">
//           <div className="success-icon">✓</div>
//           <h2>Order Placed Successfully!</h2>
//           <p>
//             Thank you for ordering with TiffinWala.
//             Your order has been placed successfully.
//           </p>

//           <Link to="/explore-tiffin" className="success-btn">
//             Continue Shopping
//           </Link>
//         </div>

//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />

//       <main className="checkout-page">
//         <div className="checkout-container">

//           <div className="checkout-heading">
//             <h1>Checkout</h1>
//             <p>Complete your details and place your order.</p>
//           </div>

//           {cartItems.length === 0 ? (
//             <div className="checkout-empty">
//               <h2>Your cart is empty!</h2>
//               <p>Please add some delicious tiffins first.</p>
//               <Link to="/explore-tiffin">
//                 Explore Tiffins
//               </Link>
//             </div>
//           ) : (
//             <form onSubmit={handlePlaceOrder}>
//               <div className="checkout-layout">

//                 {/* Customer Details */}
//                 <section className="checkout-form-section">
//                   <h2>Delivery Information</h2>
//                   <p className="checkout-section-subtitle">
//                     Enter your details for delivery.
//                   </p>

//                   <div className="checkout-form-grid">

//                     <div className="checkout-field">
//                       <label>Full Name *</label>
//                       <input
//                         type="text"
//                         name="fullName"
//                         placeholder="Enter your full name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="checkout-field">
//                       <label>Mobile Number *</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Enter 10-digit mobile number"
//                         pattern="[0-9]{10}"
//                         maxLength="10"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="checkout-field full-width">
//                       <label>Email Address</label>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <div className="checkout-field full-width">
//                       <label>Full Address *</label>
//                       <textarea
//                         name="address"
//                         placeholder="House number, street, area..."
//                         rows="3"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="checkout-field">
//                       <label>City *</label>
//                       <input
//                         type="text"
//                         name="city"
//                         placeholder="Enter city"
//                         value={formData.city}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="checkout-field">
//                       <label>State *</label>
//                       <input
//                         type="text"
//                         name="state"
//                         placeholder="Enter state"
//                         value={formData.state}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="checkout-field">
//                       <label>PIN Code *</label>
//                       <input
//                         type="text"
//                         name="pincode"
//                         placeholder="6-digit PIN code"
//                         pattern="[0-9]{6}"
//                         maxLength="6"
//                         value={formData.pincode}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="checkout-field">
//                       <label>Landmark (Optional)</label>
//                       <input
//                         type="text"
//                         name="landmark"
//                         placeholder="Nearby landmark"
//                         value={formData.landmark}
//                         onChange={handleChange}
//                       />
//                     </div>

//                   </div>

//                   {/* Payment Method */}
//                   <div className="payment-section">
//                     <h2>Payment Method</h2>

//                     <label className="payment-option">
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="COD"
//                         checked={paymentMethod === "COD"}
//                         onChange={(e) =>
//                           setPaymentMethod(e.target.value)
//                         }
//                       />
//                       <span>
//                         <strong>Cash on Delivery</strong>
//                         <small>Pay when your tiffin arrives.</small>
//                       </span>
//                     </label>

//                     <label className="payment-option">
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="Online"
//                         checked={paymentMethod === "Online"}
//                         onChange={(e) =>
//                           setPaymentMethod(e.target.value)
//                         }
//                       />
//                       <span>
//                         <strong>Online Payment</strong>
//                         <small>Demo option – payment gateway not connected.</small>
//                       </span>
//                     </label>
//                   </div>
//                 </section>

//                 {/* Order Summary */}
//                 <aside className="checkout-summary">
//                   <h2>Order Summary</h2>

//                   <div className="checkout-items">
//                     {cartItems.map((item, index) => (
//                       <div
//                         className="checkout-item"
//                         key={item.id || index}
//                       >
//                         <div className="checkout-item-info">
//                           <h4>
//                             {item.name || item.title || item.tiffinName || "Tiffin"}
//                           </h4>
//                           <p>Quantity: {item.quantity || 1}</p>
//                         </div>

//                         <strong>
//                           ₹
//                           {Number(item.price || 0) *
//                             Number(item.quantity || 1)}
//                         </strong>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="summary-line">
//                     <span>Subtotal</span>
//                     <span>₹{subtotal}</span>
//                   </div>

//                   <div className="summary-line">
//                     <span>Delivery Charge</span>
//                     <span>₹{deliveryCharge}</span>
//                   </div>

//                   <div className="summary-total">
//                     <strong>Total Amount</strong>
//                     <strong>₹{grandTotal}</strong>
//                   </div>

//                   <button type="submit" className="place-order-btn">
//                     Place Order
//                   </button>

//                   <p className="checkout-note">
//                     Your order details will be saved after confirmation.
//                   </p>

//                   <Link to="/cart" className="back-to-cart">
//                     ← Back to Cart
//                   </Link>
//                 </aside>

//               </div>
//             </form>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Checkout;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  // Load cart, customer profile and saved addresses
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const profile = JSON.parse(localStorage.getItem("customerProfile")) || {};
    const addresses =
      JSON.parse(localStorage.getItem("customerAddresses")) || [];

    setCartItems(savedCart);
    setSavedAddresses(addresses);

    const defaultAddress =
      addresses.find((item) => item.isDefault) || addresses[0];

    setFormData({
      fullName: profile.fullName || "",
      phone: profile.phone || "",
      email: profile.email || "",
      address: defaultAddress?.address || profile.address || "",
      city: defaultAddress?.city || profile.city || "",
      state: defaultAddress?.state || profile.state || "",
      pincode: defaultAddress?.pincode || profile.pincode || "",
      landmark: defaultAddress?.landmark || profile.landmark || "",
    });

    if (defaultAddress) {
      setSelectedAddressId(String(defaultAddress.id));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  const deliveryCharge = cartItems.length > 0 ? 20 : 0;
  const grandTotal = subtotal + deliveryCharge;

  // Select a saved address
  const handleSelectAddress = (address) => {
    setSelectedAddressId(String(address.id));

    setFormData((prev) => ({
      ...prev,
      address: address.address || "",
      city: address.city || "",
      state: address.state || "",
      pincode: address.pincode || "",
      landmark: address.landmark || "",
    }));
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If customer edits the address manually,
    // treat it as a custom address.
    if (
      ["address", "city", "state", "pincode", "landmark"].includes(name)
    ) {
      setSelectedAddressId("");
    }
  };

  // Place order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      navigate("/explore-tiffin");
      return;
    }

    const order = {
      orderId: `TIF${Date.now()}`,
      customer: {
        ...formData,
        addressId: selectedAddressId || null,
      },
      items: cartItems,
      subtotal,
      deliveryCharge,
      totalAmount: grandTotal,
      paymentMethod,
      orderStatus: "Pending",
      orderDate: new Date().toISOString(),
    };

    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
    );

    localStorage.setItem("cart", JSON.stringify([]));

    window.dispatchEvent(new Event("cartUpdated"));
    window.dispatchEvent(new Event("ordersUpdated"));

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <>
        <Header />

        <div className="checkout-success">
          <div className="success-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>
            Thank you for ordering with TiffinWala.
            Your order has been placed successfully.
          </p>

          <Link to="/explore-tiffin" className="success-btn">
            Continue Shopping
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="checkout-page">
        <div className="checkout-container">

          <div className="checkout-heading">
            <h1>Checkout</h1>
            <p>Complete your details and place your order.</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="checkout-empty">
              <h2>Your cart is empty!</h2>
              <p>Please add some delicious tiffins first.</p>
              <Link to="/explore-tiffin">
                Explore Tiffins
              </Link>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              <div className="checkout-layout">

                {/* Customer Details */}
                <section className="checkout-form-section">
                  <h2>Delivery Information</h2>
                  <p className="checkout-section-subtitle">
                    Enter your details for delivery.
                  </p>

                  {/* Saved Addresses */}
                  {savedAddresses.length > 0 && (
                    <div className="saved-address-section">
                      <h3>Choose Saved Address</h3>
                      <p className="checkout-section-subtitle">
                        Select an address saved in your profile.
                      </p>

                      <div className="saved-address-list">
                        {savedAddresses.map((address, index) => (
                          <label
                            className={`saved-address-card ${
                              selectedAddressId === String(address.id)
                                ? "selected"
                                : ""
                            }`}
                            key={address.id || index}
                          >
                            <input
                              type="radio"
                              name="savedAddress"
                              checked={
                                selectedAddressId === String(address.id)
                              }
                              onChange={() =>
                                handleSelectAddress(address)
                              }
                            />

                            <div className="saved-address-content">
                              <div className="saved-address-heading">
                                <strong>
                                  Address {index + 1}
                                  {address.isDefault && (
                                    <span className="default-address-label">
                                      Default
                                    </span>
                                  )}
                                </strong>
                              </div>

                              <p>
                                {address.address}, {address.city},{" "}
                                {address.state} - {address.pincode}
                              </p>

                              {address.landmark && (
                                <small>
                                  Landmark: {address.landmark}
                                </small>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>

                      <p className="saved-address-note">
                        You can also edit the address details below.
                      </p>
                    </div>
                  )}

                  <div className="checkout-form-grid">

                    <div className="checkout-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter 10-digit mobile number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field full-width">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="checkout-field full-width">
                      <label>Full Address *</label>
                      <textarea
                        name="address"
                        placeholder="House number, street, area..."
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>State *</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>PIN Code *</label>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="6-digit PIN code"
                        pattern="[0-9]{6}"
                        maxLength="6"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>Landmark (Optional)</label>
                      <input
                        type="text"
                        name="landmark"
                        placeholder="Nearby landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  {/* Payment Method */}
                  <div className="payment-section">
                    <h2>Payment Method</h2>

                    <label className="payment-option">
                      <input
                        type="radio"
                        name="payment"
                        value="COD"
                        checked={paymentMethod === "COD"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                      />
                      <span>
                        <strong>Cash on Delivery</strong>
                        <small>Pay when your tiffin arrives.</small>
                      </span>
                    </label>

                    <label className="payment-option">
                      <input
                        type="radio"
                        name="payment"
                        value="Online"
                        checked={paymentMethod === "Online"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                      />
                      <span>
                        <strong>Online Payment</strong>
                        <small>
                          Demo option – payment gateway not connected.
                        </small>
                      </span>
                    </label>
                  </div>
                </section>

                {/* Order Summary */}
                <aside className="checkout-summary">
                  <h2>Order Summary</h2>

                  <div className="checkout-items">
                    {cartItems.map((item, index) => (
                      <div
                        className="checkout-item"
                        key={item.id || index}
                      >
                        <div className="checkout-item-info">
                          <h4>
                            {item.name ||
                              item.title ||
                              item.tiffinName ||
                              "Tiffin"}
                          </h4>
                          <p>Quantity: {item.quantity || 1}</p>
                        </div>

                        <strong>
                          ₹
                          {Number(item.price || 0) *
                            Number(item.quantity || 1)}
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div className="summary-line">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="summary-line">
                    <span>Delivery Charge</span>
                    <span>₹{deliveryCharge}</span>
                  </div>

                  <div className="summary-total">
                    <strong>Total Amount</strong>
                    <strong>₹{grandTotal}</strong>
                  </div>

                  <button type="submit" className="place-order-btn">
                    Place Order
                  </button>

                  <p className="checkout-note">
                    Your order details will be saved after confirmation.
                  </p>

                  <Link to="/cart" className="back-to-cart">
                    ← Back to Cart
                  </Link>
                </aside>

              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
