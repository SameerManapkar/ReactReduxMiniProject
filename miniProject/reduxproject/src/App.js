import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
