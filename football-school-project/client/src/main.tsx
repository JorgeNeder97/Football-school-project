import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./MainApp.tsx";
import "./normalize.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <MainApp />
        </StrictMode>
    </BrowserRouter>
);
