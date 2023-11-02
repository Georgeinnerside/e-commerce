import {ProductList} from "../container/ProductList";
import Product from "../container/Product";

const Home = () => {

  return (
    <div className="home">
      <h1>Products</h1>
      <div className="product-list">
        {ProductList.map((product) => {
            return <Product data={product} key={product.id}/>
        })}
      </div>
    </div>
  );
};

export default Home;
