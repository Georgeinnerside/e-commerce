import { createContext, useState } from "react";
import { ProductList } from "../container/ProductList";

export const ShopContext = createContext(null);

const getDefaultItem = () => {
  let cart = {};
  for (let i = 1; i < ProductList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultItem());

  // pass this function to our onChange
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = (item) => {
    let totalAmount = 0;
    for (item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = ProductList.find((product) => {
          return product.id === Number(item);
        });
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const totalValue = {
    addToCart,
    removeFromCart,
    cartItem,
    updateCartItemCount,
    getTotalAmount,
  };

  return (
    <div className="context">
      <ShopContext.Provider value={totalValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
