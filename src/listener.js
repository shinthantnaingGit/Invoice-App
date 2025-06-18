import { closeSideBarBtnHandler, manageInventoryBtnHandler } from "./handlers";
import {
  jumpToNewProductPriceHandler,
  newProductBtnHandler,
  newProductEnterKeyHandler,
  productNameFocusHandler,
} from "./inventory";
import { createRecordFormHandler } from "./record";
import {
  createRecordForm,
  manageInventorySideBar,
  newProductBtn,
  newProductName,
  newProductPrice,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
  newProductBtn.addEventListener("click", newProductBtnHandler);
  newProductName.addEventListener("keyup", jumpToNewProductPriceHandler);
  newProductPrice.addEventListener("keyup", newProductEnterKeyHandler);
  manageInventorySideBar.addEventListener("click", productNameFocusHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
};

export default listener;
