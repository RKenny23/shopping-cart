import React from 'react';
import { BrowserRouter as Outlet } from 'react-router-dom';

function Products() {
  return (
    <div class="products">
      <h2>Products</h2>

      <Outlet />
    </div>
  );
}

export default Products;
