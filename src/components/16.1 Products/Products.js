import React from "react";
import Store from "./store";
import { Link } from "react-router-dom";

class Products extends React.Component {
  renderProducts = () => {
    return Store.map((prod) => {
      return (
        <>
          <Link
            to={`/products/details/${prod.id}`}
            id={prod.id}
            prodData={prod}
          >
            {prod.title}
          </Link>
          <br />
        </>
      );
    });
  };

  render() {
    console.log(Store);

    return (
      <>
        <h1>Products</h1>
        {this.renderProducts()}
      </>
    );
  }
}

export default Products;
