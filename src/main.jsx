import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Whatsapp from "./components/Whatsapp";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="font-poppins scroll-smooth">
      <Navbar />
      <App />
      <Whatsapp />
      <Footer />
    </div>
  </BrowserRouter>
);
