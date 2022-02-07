import React from "react";
import Cpu from "./products/Cpu";
import Motherboard from "./products/Motherboard";
import Ram from "./products/Ram";

function ProductList() {
  return (
    <div  style={{ marginTop: "120px" }}>
      <Motherboard />
      <span className="m-2"> </span>
      <Cpu />
      <span className="m-2"> </span>
      <Ram />
    </div>
  );
}

export default ProductList;
