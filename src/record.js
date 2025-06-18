import { createRecordForm } from "./selectors";
import { products } from "./state";

export const createRecordFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(createRecordForm);
    console.log(formData.get("product_select"));
    console.log(formData.get("quantity"));
    //filter returns all the products that match the condition
    //find returns the first product that matches the condition
    console.log(products.filter(({id})=> id==formData.get("product_select")));
    console.log(products.find(({id})=> id==formData.get("product_select")));
}