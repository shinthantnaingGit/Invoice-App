import"./node_modules/flowbite/dist/flowbite"
import 'flowbite';
import"./style.css";
import Invoice from "./src/invoice";
// import { products } from "./src/state";

const invoice = new Invoice;
invoice.init();

// console.log(products);