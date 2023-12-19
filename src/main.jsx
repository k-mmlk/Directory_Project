import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/flowbite"
import App from "./App";
import '../node_modules/flowbite/dist/flowbite.min.js'


const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />)

