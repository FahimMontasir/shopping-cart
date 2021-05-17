import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addProduct, Product } from "../../store/productSlice";
const ProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput((pre) => {
      (pre as any)[target.name] = target.value;
      const newValue = { ...pre };
      return newValue;
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct(input));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="id"
          name="id"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
export default ProductForm;
