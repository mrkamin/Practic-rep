import React, { useEffect, useState } from "react";

const Productlist = () => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log(product);
    setProduct(["Hosehold", "Clouting"]);
  });
  return <div>Productlist</div>;
};

export default Productlist;
