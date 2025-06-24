import {
  checkOutBtnHandler,
  closeSideBarBtnHandler,
  manageInventoryBtnHandler,
  outSideClickHandler,
  sideBarClickHandler,
} from "./handlers";
import {
  newProductBtnHandler,
  priceInputEnterKeyHandler,
  productGroupHandler,
  productNameInputEnterKeyHandler,
} from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import {
  checkOutBtn,
  createRecordForm,
  manageInventorySideBar,
  newProductBtn,
  newProductName,
  newProductPrice,
  recordGroup,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
  newProductBtn.addEventListener("click", newProductBtnHandler);
  newProductName.addEventListener("keyup", productNameInputEnterKeyHandler);
  newProductPrice.addEventListener("keyup", priceInputEnterKeyHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  manageInventorySideBar.addEventListener("click", sideBarClickHandler);
  document.addEventListener("click", outSideClickHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkOutBtn.addEventListener("click", checkOutBtnHandler);
  productGroup.addEventListener("click", productGroupHandler);
};

export default listener;
