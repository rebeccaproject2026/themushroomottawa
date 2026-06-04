import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product, quantity, qty = 1) => {
    setCartItems((prev) => {
      const key = `${product.id}-${quantity}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => i.key === key ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { key, product, quantity, qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((i) => i.key !== key));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const isWishlisted = (productId) => wishlist.some((p) => p.id === productId);

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cartItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const updateQuantity = (key, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) => prev.map((i) => i.key === key ? { ...i, qty: newQty } : i));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalItems, subtotal, cartOpen, setCartOpen, wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
