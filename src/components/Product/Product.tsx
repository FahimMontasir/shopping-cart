import { addToCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProductSelector, removeProduct } from "../../store/productSlice";

const Product: React.FC = () => {
  const productData = useAppSelector(getProductSelector);
  const dispatch = useAppDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeProduct(id));
  };
  const handleAddToCart = (pd: any) => {
    dispatch(addToCart(pd));
  };
  return (
    <div>
      <h1>All products</h1>
      {productData.map((pd) => (
        <p key={pd.id}>
          {`${pd.title}: $${pd.price}`}
          <button onClick={() => handleRemove(pd.id)}>remove</button>{" "}
          <button onClick={() => handleAddToCart(pd)}>AddToCart</button>
        </p>
      ))}
    </div>
  );
};
export default Product;
