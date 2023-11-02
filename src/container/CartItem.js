import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductList } from "../container/ProductList";

const CartItem = ({ data }) => {
  const { cartItem, removeFromCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);

  const { id, name, productImage, price } = data;
  const totalAmount = cartItem[id];

  return (
    <div className="cartItem">
      <img src={productImage} className="img" />
      <div className="quantity">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input
          value={totalAmount}
          typeof="number"
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}>+</button>
      </div>
      <div className="cart-description">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
