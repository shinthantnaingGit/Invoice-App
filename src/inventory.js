//inventory.js
import Swal from "sweetalert2";
import {
  newProductName,
  newProductPrice,
  productGroup,
  productListTemplate,
  productSelect,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./state";

//ADD NEW PRODUCT BTN
export const newProductBtnHandler = () => {
  // console.log("new product btn clicked!");
  const createId = uuidv4();
  //console.log(createId,newProductName.value,newProductPrice.valueAsNumber);
  products.push({
    id: createId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });
  // console.log(products);
  if (newProductName.value.trim() && !isNaN(newProductPrice.valueAsNumber)) {
    productGroup.append(
      createNewProductList(
        createId,
        newProductName.value,
        newProductPrice.valueAsNumber
      )
    );
    productSelect.append(
      new Option(
        `${newProductName.value} - ${newProductPrice.valueAsNumber}`,
        createId
      )
    );
    newProductName.value = "";
    newProductPrice.value = "";
  } else {
    Swal.fire("商品名または価格が入力されていません");
  }
};
//CREATE NEW PRODUCT LIST
export const createNewProductList = (id, name, price) => {
  const productListTP = productListTemplate.content.cloneNode(true);
  // console.log(productListTP);
  const currentProductList = productListTP.querySelector(".product-list");
  currentProductList.id = "list" + id;
  // console.log(productList.id);
  const productName = productListTP.querySelector(".product-name");
  const productPrice = productListTP.querySelector(".product-price");
  productName.innerText = name;
  productPrice.innerText = price;
  // console.log( productName.innerText = name);
  // console.log( productPrice.innerText = price);
  return currentProductList;
};
//PRODUCT LIST GROUP HANDLER
export const productGroupHandler = (event) => {
  // console.log("you clicked listGroup");
  // console.log(event.target);
  const currentProductList = event.target.closest(".product-list");
  if (event.target.classList.contains("product-remove")) {
    deleteProductList(currentProductList.id);
    // console.log(currentProductList);
    // console.log(currentProductList.id);
  }
};
//DELETE PRODUCT LIST
export const deleteProductList = (listId) => {
  // console.log("You Deleted");

  Swal.fire({
    title: "削除してもよろしいですか？",
    text: "この操作は元に戻せません！",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "はい、削除します！",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "削除されました！",
        text: "ファイルが削除されました。",
        icon: "success",
      });
      const currentProductList = productGroup.querySelector(`#${listId}`);
      currentProductList.classList.add(
        "animate__animated",
        "animate__zoomOutRight"
      );
      currentProductList.addEventListener("animationend", () => {
        // Remove the product list from the DOM
        // console.log("Animation ended, removing product list");
        currentProductList.remove();
        // Remove the product from the products array
        const productIndex = products.findIndex(
          (product) => product.id === listId.replace("list", "")
        );
        if (productIndex !== -1) {
          products.splice(productIndex, 1);
        }
        // Also remove the option from the select dropdown
        const currentSelectOption = productSelect.querySelector(
          `option[value="${listId.replace("list", "")}"]`
        );
        currentSelectOption.remove();
      });
    }
  });
};
//RENDER PRODUCTS
export const productRender = (products) => {
  products.forEach(({ id, name, price }) => {
    productGroup.append(createNewProductList(id, name, price));
    productSelect.append(new Option(`${name} - ${price}`, id));
  });
};
// ENTER KEY FOR PRODUCT NAME INPUT
export const productNameInputEnterKeyHandler = (event) => {
  // console.dir(event);
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default Enter key behavior (e.g., form submission)
    newProductPrice.focus(); // Focus on the second input
  }
};
// ENTER KEY FOR PRICE INPUT
export const priceInputEnterKeyHandler = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    newProductBtnHandler();
    newProductName.focus();
  }
};

// RE-RENDER PRODUCTS WHEN LANGUAGE CHANGES
export const reRenderProducts = () => {
  // Clear existing products from UI
  productGroup.innerHTML = "";
  productSelect.innerHTML =
    '<option value="" data-translate="chooseProduct">-- 商品を選択してください --</option>';

  // Re-render all products with current language
  productRender(products);
};
