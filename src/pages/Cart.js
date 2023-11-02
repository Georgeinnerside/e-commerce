import { ProductList } from "../container/ProductList";
import CartItem from "../container/CartItem";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, getTotalAmount } = useContext(ShopContext);
  const subTotalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Your Items</h1>
      <div className="cart">
        {ProductList.map((product) => {
          if (cartItem[product.id]) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
        ;
      </div>
      {subTotalAmount > 0 ? (
        <div className="cart-item-footer">
          <div className="subtotal">
            <h1>SubTotal: ${subTotalAmount}</h1>
          </div>
          <div className="return-btn">
            <button className="return-btn2" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
