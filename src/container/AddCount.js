import { ShopContext } from "../context/ShopContext";
import {useContext} from "react";

const AddCount = () => {
    const {cartItem} = useContext( ShopContext);
    return ( <div className="add-count">

    </div> );
}
 
export default AddCount;