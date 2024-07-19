import React, { useEffect, useState } from "react";

const Productlist = () => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    setProduct(["Hosehold", "Clouting"]);
    console.log(product);
  }, []);

  return <div>Productlist</div>;
};

export default Productlist;
