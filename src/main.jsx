import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PriorityToDoList from "./components/PriorityToDoList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <PriorityToDoList />
  </StrictMode>
);
