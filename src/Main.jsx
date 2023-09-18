import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
ReactDOM.createRoot(document.querySelector('#root')).render(
<BrowserRouter>
    <App/>
</BrowserRouter>
)