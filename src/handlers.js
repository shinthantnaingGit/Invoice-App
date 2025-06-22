import { manageInventorySideBar, newProductName } from "./selectors";

//OPEN MANAGE INVENTORY
export const manageInventoryBtnHandler = ()=>{
  // console.log("You Clicked Managae Inventory Btn");
  // console.log(manageInventorySideBar.classList);
  manageInventorySideBar.classList.remove("translate-x-full");
  manageInventorySideBar.classList.add("duration-400");
  newProductName.focus();
  event.stopPropagation();
}
//CLOSE MANAGE INVENTORY
export const closeSideBarBtnHandler = ()=>{
  manageInventorySideBar.classList.add("translate-x-full");
}
//SIDE BAR STOP PROPAGATION
export const sideBarClickHandler = (event) => {
  //To prevent closing sidebar by clicking inside the side bar;
  event.stopPropagation();
};
//CLICK OUTSIDE THE SIDE BAR AND CLOSE IT
export const outsideClickHandler = (event) => {
  // console.log("You Clicked Outside");
  if (!manageInventorySideBar.classList.contains("translate-x-full")) {
    // console.log("Its contain");
    // console.log(event.target);
    // Check if the click is outside the sidebar AND outside the open button
    if (!manageInventorySideBar.contains(event.target)) {
      manageInventorySideBar.classList.add("translate-x-full");
    }
  }
};

export const checkOutBtnHandler = () => {
  // console.log("check out");
  window.print();
}
