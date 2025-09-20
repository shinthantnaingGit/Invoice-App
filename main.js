import "./node_modules/flowbite/dist/flowbite";
import "flowbite";
import "./style.css";
import Invoice from "./src/invoice";
import { reRenderProducts } from "./src/inventory";
// import { products } from "./src/state";

// Make reRenderProducts available globally
window.reRenderProducts = reRenderProducts;

const invoice = new Invoice();
invoice.init();

// console.log(products);
