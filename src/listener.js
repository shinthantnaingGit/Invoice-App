import {
  checkOutBtnHandler,
  closeSideBarBtnHandler,
  manageInventoryBtnHandler,
  outsideClickHandler,
  sideBarClickHandler,
} from "./handlers";
import {
  jumpToNewProductPriceHandler,
  newProductBtnHandler,
  newProductEnterKeyHandler,
  productNameFocusHandler,
} from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import {
  checkOutBtn,
  createRecordForm,
  manageInventorySideBar,
  newProductBtn,
  newProductName,
  newProductPrice,
  productGroup,
  recordGroup,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
  newProductBtn.addEventListener("click", newProductBtnHandler);
  newProductName.addEventListener("keyup", jumpToNewProductPriceHandler);
  newProductPrice.addEventListener("keyup", newProductEnterKeyHandler);
  manageInventorySideBar.addEventListener("click", productNameFocusHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  manageInventorySideBar.addEventListener("click", sideBarClickHandler);
  document.addEventListener("click", outsideClickHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkOutBtn.addEventListener("click", checkOutBtnHandler);

};

export default listener;
