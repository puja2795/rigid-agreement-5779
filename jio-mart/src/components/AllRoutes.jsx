import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllProducts from "./AllProducts";
import SingleProductCard from "./SingleProductCard";
import Cart from "./Cart";
import Login from "./Login";
import PrivateRoute from "./PrivateRoutes";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all_products" element={<AllProducts type="all"/>} />
      <Route path="/groceries" element={<AllProducts type="groceries"/>} />
      <Route path="/fruits" element={<AllProducts type="fruits"/>} />
      <Route path="/home-kitchen" element={<AllProducts type="home"/>} />
      <Route path="/single_product/:id" element={<SingleProductCard />} />
      <Route path="/my-cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;

