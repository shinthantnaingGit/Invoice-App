import Swal from "sweetalert2";
import {
  createRecordForm,
  recordGroup,
  recordNetTotal,
  recordRowTemplate,
  recordTax,
  recordTotal,
} from "./selectors";
import { products } from "./state";
import { v4 as uuidv4 } from "uuid";
//CREATE RECORD FORM HANDLER
export const createRecordFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(createRecordForm);
  // console.log(formData.get("product_select"));
  // console.log(formData.get("quantity"));
  //filter returns all the products that match the condition
  //find returns the first product that matches the condition
  // console.log(products.filter(({id})=> id==formData.get("product_select")));
  // console.log(products.find(({ id }) => id == formData.get("product_select")));
  const product = products.find(
    ({ id }) => id == formData.get("product_select")
  );
  const existedRecord = document.querySelector(`#row${product.id}`);
  // console.log(existedRecord);
  if (existedRecord == null) {
    recordGroup.append(createNewRecordRow(product, formData.get("quantity")));
  } else {
    Swal.fire({
      title: `${product.name} is already existed. Do you want to upgrade quantity?`,
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, upgrade quantity!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(product.id);

        updateRecordQuantity(
          existedRecord.id,
          parseInt(formData.get("quantity"))
        );

        // Swal.fire({
        //   title: "Upgraded!",
        //   text: "Your quantity has been upgraded.",
        //   icon: "success",
        // });
      }
    });
  }
  createRecordForm.reset();
};
//CREATE RECORD ROW
export const createNewRecordRow = ({ id, name, price }, quantity) => {
  const recordRowTP = recordRowTemplate.content.cloneNode(true);
  const currentRecordRow = recordRowTP.querySelector(".record-row");
  const recordProductName = currentRecordRow.querySelector(
    ".record-product-name"
  );
  const recordProductPrice = currentRecordRow.querySelector(
    ".record-product-price"
  );
  const recordQuantity = currentRecordRow.querySelector(".record-quantity");
  const recordCost = currentRecordRow.querySelector(".record-cost");
  // currentRecordRow.setAttribute("product-id", id);
  currentRecordRow.id = "row" + id;
  // console.log("row Id",currentRecordRow.id);
  // currentRecordRow.id = "row" + uuidv4();
  recordProductName.innerText = name;
  recordProductPrice.innerText = price;
  recordQuantity.innerText = quantity;
  recordCost.innerText = price * quantity;
  return currentRecordRow;
};
//RECORD GROUP HANDLER
export const recordGroupHandler = (event) => {
  // console.log(event.target);
  const currentRecordRow = event.target.closest(".record-row");
  // console.log(currentRecordRow);
  if (event.target.classList.contains("remove-record")) {
    // console.log("you clicked remove");
    removeRecordRow(currentRecordRow.id);
    // console.log(currentRecordRow.id);
  }
  if (event.target.classList.contains("quantity-add")) {
    // console.log("you clicked +");
    // console.log(currentRecordRow.id);
    updateRecordQuantity(currentRecordRow.id, 1);
  }
  if (event.target.classList.contains("quantity-sub")) {
    // console.log("you clicked -");
    // quantitySub(currentRecordRow.id);
    updateRecordQuantity(currentRecordRow.id, -1);
  }
};
//REMOVE RECORD ROW
export const removeRecordRow = (rowId) => {
  Swal.fire({
    title: "Are you sure to Remove?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const currentRecordRow = recordGroup.querySelector(`#${rowId}`);
      currentRecordRow.remove();

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};
//UPDATE RECORD QUANTITY
const updateRecordQuantity = (RowId, newQuantity) => {
  const currentRecordRow = recordGroup.querySelector(`#${RowId}`);
  // console.log(currentRecordRow);
  const recordQuantity = currentRecordRow.querySelector(".record-quantity");
  const recordCost = currentRecordRow.querySelector(".record-cost");
  const recordProductPrice = currentRecordRow.querySelector(
    ".record-product-price"
  );
  const currentQuantity = parseFloat(recordQuantity.innerText);
  if (currentQuantity > 1 || newQuantity == 1) {
    recordQuantity.innerText = currentQuantity + newQuantity;
    recordCost.innerText =
      parseFloat(recordProductPrice.innerText) *
      parseFloat(recordQuantity.innerText);
  }
  // if (recordQuantity.innerText == 0) {
  //   removeRecordRow(RowId);
  // }
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
//RECORD GROUP OBSERVER
export const recordGroupObserver = () => {
  //CALLBACK FUNCTION
  const observeFunction = () => {
    // console.log("Record Group Observed");
    const total = calculateRecordCostTotal();
    const tax = calculateRecordTax(total);
    const netTotal = total + tax;
    recordTotal.innerText = total;
    recordTax.innerText = tax;
    recordNetTotal.innerText = netTotal;
  };
  //INSTANCES
  const productRowGroupObserver = new MutationObserver(observeFunction);
  //CONFIG
  const config = { attributes: true, childList: true, subtree: true };
  //START OBSERVE
  productRowGroupObserver.observe(recordGroup, config);
};

// //ADD QUANTITY
// export const quantityAdd = (Rowid) => {
//   // console.log("ADDED");
//   const currentRecordRow = recordGroup.querySelector(`#${Rowid}`);
//   const recordQuantity = currentRecordRow.querySelector(".record-quantity");
//   const recordCost = currentRecordRow.querySelector(".record-cost");
//   const recordProductPrice = currentRecordRow.querySelector(
//     ".record-product-price"
//   );
//   recordQuantity.innerText = parseFloat(recordQuantity.innerText) + 1;
//   recordCost.innerText =
//     parseFloat(recordProductPrice.innerText) *
//     parseFloat(recordQuantity.innerText);
// };

// //SUBTRACT QUANTITY
// export const quantitySub = (Rowid) => {
//   const currentRecordRow = recordGroup.querySelector(`#${Rowid}`);
//   const recordQuantity = currentRecordRow.querySelector(".record-quantity");
//   const recordCost = currentRecordRow.querySelector(".record-cost");
//   const recordProductPrice = currentRecordRow.querySelector(
//     ".record-product-price"
//   );
//   const currentQuantity = parseFloat(recordQuantity.innerText);
//   if (currentQuantity > 0) {
//     recordQuantity.innerText = currentQuantity - 1;
//     recordCost.innerText =
//       parseFloat(recordProductPrice.innerText) *
//       parseFloat(recordQuantity.innerText);
//   }
//   if (recordQuantity.innerText == 0) {
//     removeRecordRow(Rowid);
//   }
// };
