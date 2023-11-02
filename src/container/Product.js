import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = ({ data }) => {
  const { addToCart, cartItem } = useContext(ShopContext);

  const { id, name, productImage, price } = data;

  const totalAmount = cartItem[id];

  return (
    <div className="products">
      <img src={productImage} className="images" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="AddToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {totalAmount > 0 && <>({totalAmount})</>}
      </button>
    </div>
  );
};

export default Product;
