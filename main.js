import "./node_modules/flowbite/dist/flowbite";
import "flowbite";
import "./style.css";
import Invoice from "./src/invoice";
import DarkModeHandler from "./src/darkMode";
import LanguageHandler from "./src/languageHandler";
import { reRenderProducts } from "./src/inventory";
// import { products } from "./src/state";

// Initialize language handler first
const languageHandler = new LanguageHandler();

// Initialize dark mode handler
const darkModeHandler = new DarkModeHandler();

// Make reRenderProducts available globally
window.reRenderProducts = reRenderProducts;

const invoice = new Invoice();
invoice.init();

// console.log(products);
