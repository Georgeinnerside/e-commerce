import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {useContext} from "react";


const Navbar = () => {
  const {cartItem} = useContext(ShopContext)
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <div className="nav">
        <Link to="/">
          <FontAwesomeIcon icon={faShop} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      
      </div>
    </div>
  );
};

export default Navbar;
