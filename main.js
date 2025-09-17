import "./node_modules/flowbite/dist/flowbite";
import "flowbite";
import "./style.css";
import Invoice from "./src/invoice";
import DarkModeHandler from "./src/darkMode";
// import { products } from "./src/state";

const invoice = new Invoice();
invoice.init();

// Initialize dark mode handler
const darkModeHandler = new DarkModeHandler();

// console.log(products);
