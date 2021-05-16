import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Product from "./components/Product/Product";
import ProductForm from "./components/ProductForm/ProductForm";
import { store } from "./store/configureStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Product />
        <ProductForm />
      </div>
    </Provider>
  );
};

export default App;
