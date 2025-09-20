import {
  checkOutBtnHandler,
  closeManageInventoryBtnHandler,
  openManageInventoryBtnHandler,
  outSideClickHandler,
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
  closeManageInventoryBtn,
  createRecordForm,
  newProductBtn,
  newProductName,
  newProductPrice,
  openManageInventoryBtn,
  recordGroup,
} from "./selectors";

const listener = () => {
  openManageInventoryBtn.addEventListener(
    "click",
    openManageInventoryBtnHandler
  );
  closeManageInventoryBtn.addEventListener(
    "click",
    closeManageInventoryBtnHandler
  );
  newProductBtn.addEventListener("click", newProductBtnHandler);
  newProductName.addEventListener("keyup", productNameInputEnterKeyHandler);
  newProductPrice.addEventListener("keyup", priceInputEnterKeyHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  document.addEventListener("click", outSideClickHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkOutBtn.addEventListener("click", checkOutBtnHandler);
  productGroup.addEventListener("click", productGroupHandler);
};

export default listener;
