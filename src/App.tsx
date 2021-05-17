import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import ProductForm from "./components/ProductForm/ProductForm";
import store from "./store/configureStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Product />
        <ProductForm />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
