import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { UserProvicer } from "./context/UsersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Layout> */}
      <App />
      {/* </Layout> */}
    </BrowserRouter>
  </React.StrictMode>
);
