import React from "react";

class ProductPage extends React.Component {
  render() {
    return (
      <>
        {/* <h1>{this.props.location.prodData.title}</h1> */}
        <div>We are on the product page</div>
        <p>{this.props.id}</p>
      </>
    );
  }
}
export default ProductPage;
