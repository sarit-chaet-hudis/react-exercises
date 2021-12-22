import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";

export default function ProductPageWrapper() {
  const { id } = useParams();
  console.log(`in wrapper, id is: ${id}`);
  return <ProductPage id={id} />;
}
