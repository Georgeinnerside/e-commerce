import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import ShopContextProvider from "./context/ShopContext";


function App() {
  return (
    
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  
  );
}

export default App;
