import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Products from "./Products";
import ProductPage from "./ProductPage";

class Shop extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/details/" component={ProductPage} />
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Shop;
