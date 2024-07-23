import { useEffect, useState } from "react";

const Productlist = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log(product, category);
    setProduct(["Hosehold", "Clouting"]);
  }, [category]);

  return <div>{category}</div>;
};

export default Productlist;
