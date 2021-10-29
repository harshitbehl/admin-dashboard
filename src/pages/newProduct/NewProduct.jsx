import React from "react";

import "./NewProduct.scss";

function NewProduct() {
  return (
    <div className="newProduct">
      <div className="newProduct__header">
        <h2 className="newProduct__title">New Product</h2>
      </div>

      <div className="newProduct__body">
        <form className="newProduct__form">
          <label>Image</label>
          <input type="file" id="newProductImage" />
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
