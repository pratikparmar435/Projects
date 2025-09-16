import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./landingg_page/home/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
