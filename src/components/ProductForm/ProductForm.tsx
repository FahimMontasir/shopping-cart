type ProductFormType = {};
const ProductForm: React.FC<ProductFormType> = () => {
  return (
    <>
      <form>
        <input type="number" placeholder="id" name="id" /> <br />
        <input type="text" placeholder="title" name="title" /> <br />
        <input type="number" placeholder="price" />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
export default ProductForm;
