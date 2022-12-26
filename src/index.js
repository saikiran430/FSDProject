import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { AppProvider } from "components/Context/ProductContext";
import { CartProvider} from "components/Context/cart_Context";
import { LoginProvider } from "components/Context/LoginContext";
ReactDOM.render(
  <React.StrictMode>
    
    <AppProvider ><LoginProvider>
      <CartProvider>
    <App />
    </CartProvider></LoginProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
