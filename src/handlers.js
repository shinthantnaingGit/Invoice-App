import { manageInventorySideBar, newProductName } from "./selectors";

export const manageInventoryBtnHandler = ()=>{
  // console.log("You Clicked Managae Inventory Btn");
  console.log(manageInventorySideBar.classList);
  manageInventorySideBar.classList.remove("translate-x-full");
  manageInventorySideBar.classList.add("duration-400");
  newProductName.focus();
}

export const closeSideBarBtnHandler = ()=>{
  manageInventorySideBar.classList.add("translate-x-full");
}

