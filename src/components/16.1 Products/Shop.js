import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Products from "./Products";
import ProductPageWrapper from "./ProductPageWrapper";

class Shop extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" component={ProductPageWrapper} />
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Shop;
