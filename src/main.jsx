import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfoProvider } from "./ContextApi/InfoContext.jsx";
createRoot(document.getElementById("root")).render(
  <InfoProvider>
    <App />
  </InfoProvider>
);
