import Swal from "sweetalert2";
import {
  createRecordForm,
  productGroup,
  recordGroup,
  recordNetTotal,
  recordRowTemplate,
  recordTax,
  recordTotal,
} from "./selectors";
import { products } from "./state";
import { v4 as uuidv4 } from "uuid";

export const createRecordFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(createRecordForm);
  // console.log(formData.get("product_select"));
  // console.log(formData.get("quantity"));
  //filter returns all the products that match the condition
  //find returns the first product that matches the condition
  // console.log(products.filter(({id})=> id==formData.get("product_select")));
  console.log(products.find(({id})=> id==formData.get("product_select")));
  const product = products.find(
    ({ id }) => id == formData.get("product_select")
  );
  recordGroup.append(createNewRecordRow(product, formData.get("quantity")));
  createRecordForm.reset();

};
//CREATE RECORD ROW
export const createNewRecordRow = ({ id, name, price }, quantity) => {
  const recordRowTP = recordRowTemplate.content.cloneNode(true);
  const recordRow = recordRowTP.querySelector(".record-row");
  const recordProductName = recordRowTP.querySelector(".record-product-name");
  const recordProductPrice = recordRowTP.querySelector(".record-product-price");
  const recordQuantity = recordRowTP.querySelector(".record-quantity");
  const recordCost = recordRowTP.querySelector(".record-cost");
  recordRow.setAttribute("product-id", id);
  recordRow.id = "row"+id;
  // console.log("row Id",recordRow.id);
  // recordRow.id = "row" + uuidv4();
  recordProductName.innerText = name;
  recordProductPrice.innerText = price;
  recordQuantity.innerText = quantity;
  recordCost.innerText = price * quantity;
  return recordRow;
};
//CALCULATE RECORD COSTS TOTAL
export const calculateRecordCostTotal = () => {
  let total = 0;
  const recordCosts = recordGroup.querySelectorAll(".record-cost");
  // console.log(recordCosts);
  recordCosts.forEach((el) => (total += parseFloat(el.innerText)));
  return total;
};
//CALCULATE RECORD TAX
export const calculateRecordTax = (amount, percent = 5) =>
  (amount / 100) * percent;

export const removeRecordRow = (rowId) => {
  Swal.fire({
    title: "Are you sure to Remove?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      recordGroup.querySelector(`#${rowId}`).remove();

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};

export const recordGroupHandler = (event) => {
  // console.log(event.target);
  const currentRecordRow = event.target.closest(".record-row");
  // console.log(currentRecordRow);
  if (event.target.classList.contains("remove-record")) {
    // console.log("you clicked remove");
    removeRecordRow(currentRecordRow.id);
  }
};
