
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "../../Components/Customer/Header";
// import Footer from "../../Components/Customer/Footer";
// import "./CSS/CustomerProfilee.css";

// const initialProfile = {
//   fullName: "",
//   phone: "",
//   email: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
//   landmark: "",
// };

// const CustomerProfilee = () => {
//   const [profile, setProfile] = useState(initialProfile);
//   const [formData, setFormData] = useState(initialProfile);
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const savedProfile = JSON.parse(
//       localStorage.getItem("customerProfile") || "null"
//     );

//     if (savedProfile) {
//       setProfile({ ...initialProfile, ...savedProfile });
//       setFormData({ ...initialProfile, ...savedProfile });
//     } else {
//       // Checkout ke latest order se profile details load karein
//       const orders = JSON.parse(localStorage.getItem("orders")) || [];
//       const latestOrder = orders[orders.length - 1];

//       if (latestOrder?.customer) {
//         const customerData = {
//           ...initialProfile,
//           ...latestOrder.customer,
//         };

//         setProfile(customerData);
//         setFormData(customerData);
//       }
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleEdit = () => {
//     setFormData({ ...profile });
//     setIsEditing(true);
//     setMessage("");
//   };

//   const handleCancel = () => {
//     setFormData({ ...profile });
//     setIsEditing(false);
//     setMessage("");
//   };

//   const handleSave = (e) => {
//     e.preventDefault();

//     const updatedProfile = { ...formData };

//     localStorage.setItem(
//       "customerProfile",
//       JSON.stringify(updatedProfile)
//     );

//     setProfile(updatedProfile);
//     setIsEditing(false);
//     setMessage("Profile updated successfully!");

//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const getInitials = (name) => {
//     if (!name.trim()) return "C";

//     return name
//       .trim()
//       .split(/\s+/)
//       .slice(0, 2)
//       .map((word) => word[0].toUpperCase())
//       .join("");
//   };

//   return (
//     <>
//       <Header />

//       <main className="customer-profile-page">
//         <div className="customer-profile-container">

//           {/* Page Heading */}
//           <div className="profile-heading">
//             <div>
//               <h1>My Profile</h1>
//               <p>Manage your personal information and delivery address.</p>
//             </div>

//             <Link to="/my-orders" className="profile-orders-link">
//               My Orders
//             </Link>
//           </div>

//           {/* Profile Card */}
//           <div className="profile-card">

//             <div className="profile-card-header">
//               <div className="profile-user-info">
//                 <div className="profile-avatar">
//                   {getInitials(profile.fullName)}
//                 </div>

//                 <div>
//                   <h2>{profile.fullName || "Customer Name"}</h2>
//                   <p>{profile.email || "Add your email address"}</p>
//                 </div>
//               </div>

//               {!isEditing && (
//                 <button
//                   type="button"
//                   className="profile-edit-btn"
//                   onClick={handleEdit}
//                 >
//                   Edit Profile
//                 </button>
//               )}
//             </div>

//             {message && (
//               <div className="profile-success-message">
//                 {message}
//               </div>
//             )}

//             <form onSubmit={handleSave}>

//               {/* Personal Information */}
//               <section className="profile-section">
//                 <div className="profile-section-heading">
//                   <h3>Personal Information</h3>
//                   <p>Your basic contact details</p>
//                 </div>

//                 <div className="profile-form-grid">

//                   <div className="profile-field">
//                     <label>Full Name *</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       placeholder="Enter your full name"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       required
//                     />
//                   </div>

//                   <div className="profile-field">
//                     <label>Mobile Number *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Enter 10-digit mobile number"
//                       pattern="[0-9]{10}"
//                       maxLength="10"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       required
//                     />
//                   </div>

//                   <div className="profile-field full-width">
//                     <label>Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </div>

//                 </div>
//               </section>

//               {/* Address Information */}
//               <section className="profile-section">
//                 <div className="profile-section-heading">
//                   <h3>Delivery Address</h3>
//                   <p>Where should we deliver your tiffin?</p>
//                 </div>

//                 <div className="profile-form-grid">

//                   <div className="profile-field full-width">
//                     <label>Full Address *</label>
//                     <textarea
//                       name="address"
//                       rows="3"
//                       placeholder="House number, street, area..."
//                       value={formData.address}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       required
//                     />
//                   </div>

//                   <div className="profile-field">
//                     <label>City *</label>
//                     <input
//                       type="text"
//                       name="city"
//                       placeholder="Enter city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       required
//                     />
//                   </div>

//                   <div className="profile-field">
//                     <label>State *</label>
//                     <input
//                       type="text"
//                       name="state"
//                       placeholder="Enter state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       required
//                     />
//                   </div>

//                   <div className="profile-field">
//                     <label>PIN Code *</label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       placeholder="Enter 6-digit PIN code"
//                       pattern="[0-9]{6}"
//                       maxLength="6"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       required
//                     />
//                   </div>

//                   <div className="profile-field">
//                     <label>Landmark (Optional)</label>
//                     <input
//                       type="text"
//                       name="landmark"
//                       placeholder="Nearby landmark"
//                       value={formData.landmark}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </div>

//                 </div>
//               </section>

//               {/* Form Buttons */}
//               {isEditing && (
//                 <div className="profile-form-actions">
//                   <button
//                     type="button"
//                     className="profile-cancel-btn"
//                     onClick={handleCancel}
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     type="submit"
//                     className="profile-save-btn"
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               )}

//             </form>
//           </div>

//           <div className="profile-bottom-note">
//             Your profile information is stored in this browser for now.
//           </div>

//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default CustomerProfilee;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/CustomerProfilee.css";

const initialProfile = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  landmark: "",
};

const emptyAddress = {
  address: "",
  city: "",
  state: "",
  pincode: "",
  landmark: "",
};

const CustomerProfilee = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [formData, setFormData] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  // Address Management States
  const [addresses, setAddresses] = useState([]);
  const [addressForm, setAddressForm] = useState(emptyAddress);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  useEffect(() => {
    const savedProfile = JSON.parse(
      localStorage.getItem("customerProfile") || "null"
    );

    let customerData = initialProfile;

    if (savedProfile) {
      customerData = { ...initialProfile, ...savedProfile };
    } else {
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      const latestOrder = orders[orders.length - 1];

      if (latestOrder?.customer) {
        customerData = {
          ...initialProfile,
          ...latestOrder.customer,
        };
      }
    }

    setProfile(customerData);
    setFormData(customerData);

    // Load saved addresses
    const savedAddresses = JSON.parse(
      localStorage.getItem("customerAddresses") || "null"
    );

    if (savedAddresses) {
      setAddresses(savedAddresses);
    } else if (customerData.address) {
      const firstAddress = {
        id: Date.now(),
        ...emptyAddress,
        address: customerData.address,
        city: customerData.city,
        state: customerData.state,
        pincode: customerData.pincode,
        landmark: customerData.landmark,
        isDefault: true,
      };

      setAddresses([firstAddress]);
      localStorage.setItem(
        "customerAddresses",
        JSON.stringify([firstAddress])
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setFormData({ ...profile });
    setIsEditing(true);
    setMessage("");
  };

  const handleCancel = () => {
    setFormData({ ...profile });
    setIsEditing(false);
    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedProfile = { ...formData };

    localStorage.setItem(
      "customerProfile",
      JSON.stringify(updatedProfile)
    );

    setProfile(updatedProfile);
    setIsEditing(false);
    setMessage("Profile updated successfully!");

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Save addresses in LocalStorage
  const saveAddresses = (updatedAddresses) => {
    setAddresses(updatedAddresses);
    localStorage.setItem(
      "customerAddresses",
      JSON.stringify(updatedAddresses)
    );
  };

  // Address Form Change
  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setAddressForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open Add Address Form
  const handleAddAddress = () => {
    setAddressForm({ ...emptyAddress });
    setEditingAddressId(null);
    setShowAddressForm(true);
  };

  // Edit Address
  const handleEditAddress = (address) => {
    setAddressForm({
      address: address.address || "",
      city: address.city || "",
      state: address.state || "",
      pincode: address.pincode || "",
      landmark: address.landmark || "",
    });

    setEditingAddressId(address.id);
    setShowAddressForm(true);
  };

  // Save New or Updated Address
  const handleAddressSubmit = (e) => {
    e.preventDefault();

    let updatedAddresses;

    if (editingAddressId !== null) {
      updatedAddresses = addresses.map((item) =>
        item.id === editingAddressId
          ? { ...item, ...addressForm }
          : item
      );
    } else {
      const newAddress = {
        id: Date.now(),
        ...addressForm,
        isDefault: addresses.length === 0,
      };

      updatedAddresses = [...addresses, newAddress];
    }

    saveAddresses(updatedAddresses);
    setShowAddressForm(false);
    setAddressForm({ ...emptyAddress });
    setEditingAddressId(null);
    setMessage(
      editingAddressId !== null
        ? "Address updated successfully!"
        : "New address added successfully!"
    );
  };

  // Delete Address
  const handleDeleteAddress = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmDelete) return;

    let updatedAddresses = addresses.filter(
      (item) => item.id !== id
    );

    // Set first remaining address as default if needed
    if (
      addresses.find((item) => item.id === id)?.isDefault &&
      updatedAddresses.length > 0
    ) {
      updatedAddresses = updatedAddresses.map((item, index) => ({
        ...item,
        isDefault: index === 0,
      }));
    }

    saveAddresses(updatedAddresses);
    setMessage("Address deleted successfully!");
  };

  // Set Default Address
  const handleDefaultAddress = (id) => {
    const updatedAddresses = addresses.map((item) => ({
      ...item,
      isDefault: item.id === id,
    }));

    saveAddresses(updatedAddresses);
    setMessage("Default address updated successfully!");
  };

  const getInitials = (name) => {
    if (!name.trim()) return "C";

    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <>
      <Header />

      <main className="customer-profile-page">
        <div className="customer-profile-container">

          {/* Page Heading */}
          <div className="profile-heading">
            <div>
              <h1>My Profile</h1>
              <p>Manage your personal information and delivery address.</p>
            </div>

            <Link to="/my-orders" className="profile-orders-link">
              My Orders
            </Link>
          </div>

          {/* Profile Card */}
          <div className="profile-card">

            <div className="profile-card-header">
              <div className="profile-user-info">
                <div className="profile-avatar">
                  {getInitials(profile.fullName)}
                </div>

                <div>
                  <h2>{profile.fullName || "Customer Name"}</h2>
                  <p>{profile.email || "Add your email address"}</p>
                </div>
              </div>

              {!isEditing && (
                <button
                  type="button"
                  className="profile-edit-btn"
                  onClick={handleEdit}
                >
                  Edit Profile
                </button>
              )}
            </div>

            {message && (
              <div className="profile-success-message">
                {message}
              </div>
            )}

            <form onSubmit={handleSave}>

              {/* Personal Information */}
              <section className="profile-section">
                <div className="profile-section-heading">
                  <h3>Personal Information</h3>
                  <p>Your basic contact details</p>
                </div>

                <div className="profile-form-grid">

                  <div className="profile-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="profile-field">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="profile-field full-width">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                </div>
              </section>

              {/* Address Information */}
              <section className="profile-section">
                <div className="profile-section-heading">
                  <h3>Delivery Address</h3>
                  <p>Where should we deliver your tiffin?</p>
                </div>

                <div className="profile-form-grid">

                  <div className="profile-field full-width">
                    <label>Full Address *</label>
                    <textarea
                      name="address"
                      rows="3"
                      placeholder="House number, street, area..."
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="profile-field">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="profile-field">
                    <label>State *</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="Enter state"
                      value={formData.state}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="profile-field">
                    <label>PIN Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter 6-digit PIN code"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      value={formData.pincode}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="profile-field">
                    <label>Landmark (Optional)</label>
                    <input
                      type="text"
                      name="landmark"
                      placeholder="Nearby landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                </div>
              </section>

              {/* Form Buttons */}
              {isEditing && (
                <div className="profile-form-actions">
                  <button
                    type="button"
                    className="profile-cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="profile-save-btn"
                  >
                    Save Changes
                  </button>
                </div>
              )}

            </form>

            {/* Multiple Delivery Addresses */}
            <section className="profile-section address-management-section">

              <div className="address-management-heading">
                <div className="profile-section-heading">
                  <h3>My Delivery Addresses</h3>
                  <p>Manage your saved delivery locations.</p>
                </div>

                <button
                  type="button"
                  className="add-address-btn"
                  onClick={handleAddAddress}
                >
                  + Add New Address
                </button>
              </div>

              {/* Saved Addresses */}
              {addresses.length === 0 ? (
                <div className="no-saved-address">
                  <h4>No Saved Addresses</h4>
                  <p>Add your first delivery address to get started.</p>
                </div>
              ) : (
                <div className="saved-address-grid">
                  {addresses.map((item) => (
                    <div className="saved-address-card" key={item.id}>

                      <div className="saved-address-top">
                        <h4>Delivery Address</h4>

                        {item.isDefault && (
                          <span className="default-address-badge">
                            Default
                          </span>
                        )}
                      </div>

                      <p>{item.address}</p>
                      <p>
                        {item.city}, {item.state} - {item.pincode}
                      </p>

                      {item.landmark && (
                        <p>Landmark: {item.landmark}</p>
                      )}

                      <div className="saved-address-actions">

                        {!item.isDefault && (
                          <button
                            type="button"
                            className="set-default-btn"
                            onClick={() => handleDefaultAddress(item.id)}
                          >
                            Set as Default
                          </button>
                        )}

                        <button
                          type="button"
                          className="edit-address-btn"
                          onClick={() => handleEditAddress(item)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-address-btn"
                          onClick={() => handleDeleteAddress(item.id)}
                        >
                          Delete
                        </button>

                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add / Edit Address Form */}
              {showAddressForm && (
                <form
                  className="address-form"
                  onSubmit={handleAddressSubmit}
                >
                  <h3>
                    {editingAddressId !== null
                      ? "Edit Address"
                      : "Add New Address"}
                  </h3>

                  <div className="profile-form-grid">

                    <div className="profile-field full-width">
                      <label>Full Address *</label>
                      <textarea
                        name="address"
                        rows="3"
                        placeholder="House number, street, area..."
                        value={addressForm.address}
                        onChange={handleAddressChange}
                        required
                      />
                    </div>

                    <div className="profile-field">
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={addressForm.city}
                        onChange={handleAddressChange}
                        required
                      />
                    </div>

                    <div className="profile-field">
                      <label>State *</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Enter state"
                        value={addressForm.state}
                        onChange={handleAddressChange}
                        required
                      />
                    </div>

                    <div className="profile-field">
                      <label>PIN Code *</label>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Enter 6-digit PIN code"
                        pattern="[0-9]{6}"
                        maxLength="6"
                        value={addressForm.pincode}
                        onChange={handleAddressChange}
                        required
                      />
                    </div>

                    <div className="profile-field">
                      <label>Landmark (Optional)</label>
                      <input
                        type="text"
                        name="landmark"
                        placeholder="Nearby landmark"
                        value={addressForm.landmark}
                        onChange={handleAddressChange}
                      />
                    </div>

                  </div>

                  <div className="address-form-actions">
                    <button
                      type="button"
                      className="profile-cancel-btn"
                      onClick={() => {
                        setShowAddressForm(false);
                        setEditingAddressId(null);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="profile-save-btn"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              )}

            </section>
          </div>

          <div className="profile-bottom-note">
            Your profile information is stored in this browser for now.
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default CustomerProfilee;
