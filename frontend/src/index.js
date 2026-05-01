import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import { store } from "./stores/store";

// ✅ THIS LINE IS THE FIX
axios.defaults.baseURL = "https://quicknotes-pro-1.onrender.com";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
