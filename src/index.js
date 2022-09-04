import React from "react";
import ReactDom from "react-dom/client";
import {App} from "./App";
import reportWebVitals from './reportWebVitals';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();