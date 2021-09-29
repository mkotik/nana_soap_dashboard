import React from "react";
import Item from "./Item";

function Category(props) {
  const { category } = props;
  console.log(category);
  return (
    <div className="productsList">
      <h3 className="text-center py-1 categoriesTitle m-0">
        {category.category_name}
      </h3>
      <div className="header">
        <h5 className="productHead">Product</h5>
        <h5 className="remainingHead">Remaining</h5>
        <h5 className="ordersHead">Orders</h5>
        <h5 className="salesHead">Sales</h5>
        <h5 className="optionsHead">Options</h5>
      </div>
      <div className="items">
        {category.products.map((prod) => (
          <Item product={prod} />
        ))}
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Category;
