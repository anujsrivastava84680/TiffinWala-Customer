
// import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
// import Header from "../../Components/Customer/Header";
// import Footer from "../../Components/Customer/Footer";
// import "./CSS/ExploreTiffins.css";

// const ExploreTiffins = () => {
//   const navigate = useNavigate();

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   // Wishlist data LocalStorage se load hoga
//   const [wishlist, setWishlist] = useState(() => {
//     return JSON.parse(localStorage.getItem("wishlist") || "[]");
//   });
// const [reviews, setReviews] = useState(() => {
//   return JSON.parse(localStorage.getItem("tiffinReviews") || "[]");
// });

// useEffect(() => {
//   const loadReviews = () => {
//     setReviews(
//       JSON.parse(localStorage.getItem("tiffinReviews") || "[]")
//     );
//   };

//   window.addEventListener("reviewsUpdated", loadReviews);

//   return () => {
//     window.removeEventListener("reviewsUpdated", loadReviews);
//   };
// }, []);
//   const categories = [
//     "All",
//     "Veg",
//     "Non-Veg",
//     "Healthy",
//     "North Indian",
//     "South Indian",
//   ];

//   const tiffins = [
//     {
//       id: 1,
//       name: "Homely Veg Thali",
//       chef: "Priya Home Kitchen",
//       category: "Veg",
//       price: 100,
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
//       description: "Fresh homemade roti, dal, rice and seasonal sabzi.",
//     },
//     {
//       id: 2,
//       name: "Special Punjabi Thali",
//       chef: "Amritsar Food House",
//       category: "North Indian",
//       price: 140,
//       rating: 4.9,
//       image:
//         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
//       description: "Delicious Punjabi food with fresh ingredients.",
//     },
//     {
//       id: 3,
//       name: "Healthy Diet Tiffin",
//       chef: "Fit Food Kitchen",
//       category: "Healthy",
//       price: 120,
//       rating: 4.7,
//       image:
//         "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
//       description: "A balanced meal for your healthy lifestyle.",
//     },
//     {
//       id: 4,
//       name: "Homemade Chicken Meal",
//       chef: "Royal Kitchen",
//       category: "Non-Veg",
//       price: 180,
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
//       description: "Fresh chicken curry, rice and delicious sides.",
//     },
//     {
//       id: 5,
//       name: "South Indian Meal",
//       chef: "Chennai Home Foods",
//       category: "South Indian",
//       price: 110,
//       rating: 4.6,
//       image:
//         "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600",
//       description: "Traditional South Indian homemade meal.",
//     },
//     {
//       id: 6,
//       name: "Daily Special Veg Meal",
//       chef: "Annapurna Kitchen",
//       category: "Veg",
//       price: 90,
//       rating: 4.5,
//       image:
//         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
//       description: "Simple, tasty and affordable homemade food.",
//     },
//   ];

//   // Wishlist mein Add / Remove karne ka function
//   const toggleWishlist = (tiffin) => {
//     const alreadyAdded = wishlist.some(
//       (item) => item.id === tiffin.id
//     );

//     let updatedWishlist;

//     if (alreadyAdded) {
//       updatedWishlist = wishlist.filter(
//         (item) => item.id !== tiffin.id
//       );
//     } else {
//       updatedWishlist = [...wishlist, tiffin];
//     }

//     setWishlist(updatedWishlist);

//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     // Header aur doosre components ko update signal
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };
//   const getTiffinRating = (tiffin) => {
//   const tiffinReviews = reviews.filter(
//     (review) => review.tiffinId === tiffin.id
//   );

//   if (tiffinReviews.length === 0) {
//     return {
//       rating: tiffin.rating,
//       count: 0,
//     };
//   }

//   const totalRating = tiffinReviews.reduce(
//     (total, review) => total + Number(review.rating),
//     0
//   );

//   return {
//     rating: (totalRating / tiffinReviews.length).toFixed(1),
//     count: tiffinReviews.length,
//   };
// };

//   const filteredTiffins = tiffins.filter((tiffin) => {
//     const matchSearch =
//       tiffin.name.toLowerCase().includes(search.toLowerCase()) ||
//       tiffin.chef.toLowerCase().includes(search.toLowerCase());

//     const matchCategory =
//       category === "All" || tiffin.category === category;

//     return matchSearch && matchCategory;
//   });

//   return (
//     <>
//       <Header />

//       <main className="explore-page">

//         {/* Page Heading */}
//         <section className="explore-heading">
//           <span>FRESH & HOMEMADE</span>
//           <h1>Explore Our Tiffins</h1>
//           <p>
//             Discover delicious homemade meals prepared with love
//             by local home chefs.
//           </p>
//         </section>

//         {/* Search Section */}
//         <section className="explore-search">
//           <div className="explore-search-box">
//             <span>🔍</span>
//             <input
//               type="text"
//               placeholder="Search tiffin or home chef..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </section>

//         {/* Category Filters */}
//         <section className="explore-content">

//           <div className="explore-categories">
//             {categories.map((item) => (
//               <button
//                 key={item}
//                 className={category === item ? "active" : ""}
//                 onClick={() => setCategory(item)}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* Tiffin Cards */}
//           <div className="explore-result-heading">
//             <h2>Available Tiffins</h2>
//             <p>{filteredTiffins.length} meals found</p>
//           </div>

//           <div className="explore-tiffin-grid">
//             {filteredTiffins.length > 0 ? (
//               filteredTiffins.map((tiffin) => {

//                 const isWishlisted = wishlist.some(
//                   (item) => item.id === tiffin.id
//                 );

//                 return (
//                   <div className="explore-tiffin-card" key={tiffin.id}>

//                     <div className="explore-tiffin-image">
//                       <img src={tiffin.image} alt={tiffin.name} />

//                       {/* Wishlist Heart Button */}
//                       <button
//                         type="button"
//                         className={`explore-wishlist-btn ${
//                           isWishlisted ? "wishlisted" : ""
//                         }`}
//                         onClick={() => toggleWishlist(tiffin)}
//                         title={
//                           isWishlisted
//                             ? "Remove from Wishlist"
//                             : "Add to Wishlist"
//                         }
//                       >
//                         <FaHeart />
//                       </button>

//                       <span className="explore-rating">
//   ⭐ {getTiffinRating(tiffin).rating}
//   {getTiffinRating(tiffin).count > 0 && (
//     <small>
//       ({getTiffinRating(tiffin).count} reviews)
//     </small>
//   )}
// </span>
//                     </div>

//                     <div className="explore-tiffin-info">
//                       <span className="explore-category-name">
//                         {tiffin.category}
//                       </span>

//                       <h3>{tiffin.name}</h3>

//                       <p className="explore-chef-name">
//                         👨‍🍳 {tiffin.chef}
//                       </p>

//                       <p className="explore-description">
//                         {tiffin.description}
//                       </p>

//                       <div className="explore-card-bottom">
//                         <h3>
//                           ₹{tiffin.price}
//                           <small> / meal</small>
//                         </h3>

//                         <button
//                           onClick={() =>
//                             navigate(`/tiffin-details/${tiffin.id}`)
//                           }
//                         >
//                           View Details
//                         </button>
//                       </div>
//                     </div>

//                   </div>
//                 );
//               })
//             ) : (
//               <div className="explore-no-result">
//                 <h3>No Tiffins Found!</h3>
//                 <p>Try searching with another name or category.</p>
//               </div>
//             )}
//           </div>

//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default ExploreTiffins;






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Header from "../../Components/Customer/Header";
import Footer from "../../Components/Customer/Footer";
import "./CSS/ExploreTiffins.css";

const ExploreTiffins = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Wishlist LocalStorage se load hoga
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist") || "[]");
  });

  // Reviews LocalStorage se load honge
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(localStorage.getItem("tiffinReviews") || "[]");
  });

  // Reviews update hone par rating refresh hogi
  useEffect(() => {
    const loadReviews = () => {
      const savedReviews = JSON.parse(
        localStorage.getItem("tiffinReviews") || "[]"
      );

      setReviews(savedReviews);
    };

    window.addEventListener("reviewsUpdated", loadReviews);

    return () => {
      window.removeEventListener("reviewsUpdated", loadReviews);
    };
  }, []);

  const categories = [
    "All",
    "Veg",
    "Non-Veg",
    "Healthy",
    "North Indian",
    "South Indian",
  ];

  // Tiffin Data
  const tiffins = [
    {
      id: 1,
      name: "Homely Veg Thali",
      chef: "Priya Home Kitchen",
      category: "Veg",
      price: 100,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
      description: "Fresh homemade roti, dal, rice and seasonal sabzi.",
    },
    {
      id: 2,
      name: "Special Punjabi Thali",
      chef: "Amritsar Food House",
      category: "North Indian",
      price: 140,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      description: "Delicious Punjabi food with fresh ingredients.",
    },
    {
      id: 3,
      name: "Healthy Diet Tiffin",
      chef: "Fit Food Kitchen",
      category: "Healthy",
      price: 120,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
      description: "A balanced meal for your healthy lifestyle.",
    },
    {
      id: 4,
      name: "Homemade Chicken Meal",
      chef: "Royal Kitchen",
      category: "Non-Veg",
      price: 180,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
      description: "Fresh chicken curry, rice and delicious sides.",
    },
    {
      id: 5,
      name: "South Indian Meal",
      chef: "Chennai Home Foods",
      category: "South Indian",
      price: 110,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600",
      description: "Traditional South Indian homemade meal.",
    },
    {
      id: 6,
      name: "Daily Special Veg Meal",
      chef: "Annapurna Kitchen",
      category: "Veg",
      price: 90,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
      description: "Simple, tasty and affordable homemade food.",
    },
  ];

  // Wishlist Add / Remove
  const toggleWishlist = (tiffin) => {
    const alreadyAdded = wishlist.some(
      (item) => item.id === tiffin.id
    );

    let updatedWishlist;

    if (alreadyAdded) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== tiffin.id
      );
    } else {
      updatedWishlist = [...wishlist, tiffin];
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Tiffin ki Average Rating aur Review Count
  const getTiffinRating = (tiffin) => {
    const tiffinReviews = reviews.filter(
      (review) =>
        Number(review.tiffinId) === Number(tiffin.id)
    );

    if (tiffinReviews.length === 0) {
      return {
        rating: tiffin.rating,
        count: 0,
      };
    }

    const totalRating = tiffinReviews.reduce(
      (total, review) => total + Number(review.rating || 0),
      0
    );

    return {
      rating: (totalRating / tiffinReviews.length).toFixed(1),
      count: tiffinReviews.length,
    };
  };

  // Search aur Category Filter
  const filteredTiffins = tiffins.filter((tiffin) => {
    const matchSearch =
      tiffin.name.toLowerCase().includes(search.toLowerCase()) ||
      tiffin.chef.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || tiffin.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Header />

      <main className="explore-page">

        {/* Page Heading */}
        <section className="explore-heading">
          <span>FRESH & HOMEMADE</span>
          <h1>Explore Our Tiffins</h1>
          <p>
            Discover delicious homemade meals prepared with love
            by local home chefs.
          </p>
        </section>

        {/* Search Section */}
        <section className="explore-search">
          <div className="explore-search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search tiffin or home chef..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        {/* Category Filters */}
        <section className="explore-content">

          <div className="explore-categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Tiffin Cards */}
          <div className="explore-result-heading">
            <h2>Available Tiffins</h2>
            <p>{filteredTiffins.length} meals found</p>
          </div>

          <div className="explore-tiffin-grid">
            {filteredTiffins.length > 0 ? (
              filteredTiffins.map((tiffin) => {
                const isWishlisted = wishlist.some(
                  (item) => item.id === tiffin.id
                );

                // Current Tiffin Rating
                const tiffinRating = getTiffinRating(tiffin);

                return (
                  <div
                    className="explore-tiffin-card"
                    key={tiffin.id}
                  >
                    <div className="explore-tiffin-image">
                      <img
                        src={tiffin.image}
                        alt={tiffin.name}
                      />

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        className={`explore-wishlist-btn ${
                          isWishlisted ? "wishlisted" : ""
                        }`}
                        onClick={() => toggleWishlist(tiffin)}
                        title={
                          isWishlisted
                            ? "Remove from Wishlist"
                            : "Add to Wishlist"
                        }
                      >
                        <FaHeart />
                      </button>

                      {/* Rating */}
                      <span className="explore-rating">
                        ⭐ {tiffinRating.rating}

                        {tiffinRating.count > 0 ? (
                          <small>
                            ({tiffinRating.count} reviews)
                          </small>
                        ) : (
                          <small>(No reviews yet)</small>
                        )}
                      </span>
                    </div>

                    <div className="explore-tiffin-info">
                      <span className="explore-category-name">
                        {tiffin.category}
                      </span>

                      <h3>{tiffin.name}</h3>

                      <p className="explore-chef-name">
                        👨‍🍳 {tiffin.chef}
                      </p>

                      <p className="explore-description">
                        {tiffin.description}
                      </p>

                      <div className="explore-card-bottom">
                        <h3>
                          ₹{tiffin.price}
                          <small> / meal</small>
                        </h3>

                        <button
                          onClick={() =>
                            navigate(`/tiffin-details/${tiffin.id}`)
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="explore-no-result">
                <h3>No Tiffins Found!</h3>
                <p>
                  Try searching with another name or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ExploreTiffins;
