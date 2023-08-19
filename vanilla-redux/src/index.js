import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import {createRoot} from "react-dom/client";
import store from "./store";
const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
