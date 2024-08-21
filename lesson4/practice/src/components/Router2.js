import {Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";

function Router2() {
    return (
        <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/product/:categoryId" element={<Product />} />
        </Routes>
    );
}
export default Router2;