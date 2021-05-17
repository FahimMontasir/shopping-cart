import {
  getCartProductSelector,
  getTotalPriceSelector,
  removeToCart,
} from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Cart: React.FC = () => {
  const totalPrice = useAppSelector(getTotalPriceSelector);
  const cartProducts = useAppSelector(getCartProductSelector);
  const dispatch = useAppDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeToCart(id));
  };
  return (
    <div>
      <h1>cart details {totalPrice}</h1>
      {cartProducts.map((pd) => (
        <p key={pd.id}>
          {`${pd.title} -- amount${pd.amount}`}{" "}
          <button onClick={() => handleRemove(pd.id)}>Remove</button>
        </p>
      ))}
    </div>
  );
};
export default Cart;
