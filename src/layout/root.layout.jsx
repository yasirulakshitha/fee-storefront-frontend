import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { CartContext } from "../context/cartContext";
import { useEffect } from "react";
import Footer from "../pages/home/components/Footer";

function RootLayout() {
  const name = "janith";

  const [cart, setCart] = useState(() => {
      const savedCrat = localStorage.getItem("cart");
      return savedCrat ? JSON.parse(savedCrat) : [];
  });

  //  Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCart = (product) => {
    const existingItem = cart.find((el) => product._id === el._id);
  
    if (existingItem) {
     
       const newCount = product.count ?? existingItem.count + 1; 

      setCart(
        cart.map((el) =>
          el._id === product._id ? { ...el, count: newCount} : el
        )
      );
    } else {
      setCart([...cart, { ...product, count: product.count ?? 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, updateCart: updateCart, clearCart: clearCart,removeFromCart }}
    >
      <main>
        <Navigation name={name} />
        <Outlet />
        <Footer />
      </main>
    </CartContext.Provider>
  );
}

export default RootLayout;