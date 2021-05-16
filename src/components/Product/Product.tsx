import { useState } from "react";

type ProductList = {};
type ProductState = {
  /**should provide id */
  id: number;
  /**awesome title */
  title: string;
  price: number;
}[];
const initialData = [
  { id: 1, title: "mcBook pro", price: 1300 },
  { id: 2, title: "mcBook Air", price: 999 },
  { id: 3, title: "iPhon 12 pro max", price: 1000 },
];
const Product: React.FC<ProductList> = ({}) => {
  const [productData, setProductData] = useState<ProductState>(initialData);
  const handleAdd = () => {
    setProductData([{ id: 4, title: "samsung", price: 500 }, ...productData]);
  };
  return (
    <div>
      <h1>All products</h1>
      {productData.map((pd) => (
        <p key={pd.id}>{`${pd.title}: $${pd.price}`}</p>
      ))}
      <button onClick={handleAdd}>Add one</button>
    </div>
  );
};
export default Product;
