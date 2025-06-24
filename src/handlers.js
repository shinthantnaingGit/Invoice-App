import { manageInventorySideBar, newProductName, openManageInventoryBtn } from "./selectors";

//OPEN MANAGE INVENTORY
export const openManageInventoryBtnHandler = () => {
  // console.log("You Clicked Managae Inventory Btn");
  // console.log(manageInventorySideBar.classList);
  manageInventorySideBar.classList.remove("translate-x-full");
  manageInventorySideBar.classList.add("duration-400");
  newProductName.focus();
  // event.stopPropagation();
};
//CLOSE MANAGE INVENTORY
export const closeManageInventoryBtnHandler = () => {
  manageInventorySideBar.classList.add("translate-x-full");
};
//CLICK OUTSIDE THE SIDE BAR AND CLOSE IT
export const outSideClickHandler = (event) => {
  // Check if the sidebar is currently open
  if (!manageInventorySideBar.classList.contains("translate-x-full")) {
    // 1. Check if the clicked element is part of the sidebar or the open button
    if (
      manageInventorySideBar.contains(event.target) ||
      openManageInventoryBtn.contains(event.target)
    ) {
      // If YES, do nothing (keep sidebar open)
      return;
    }

    // 2. NEW CHECK: Check if the clicked element is part of a SweetAlert2 popup
    // You can use a class that SweetAlert2 adds to its main container or popup.
    // The main container typically has 'swal2-container' or 'swal2-popup'

    if (
      event.target.closest(".swal2-container") ||
      event.target.closest(".swal2-popup")
    ) {
      // If YES, do nothing, as it's a click within the SweetAlert2 dialog
      return;
    }

    // If we reach here, the click was truly outside the sidebar, the open button,
    // AND outside any SweetAlert2 dialog. So, close the sidebar.
    manageInventorySideBar.classList.add("translate-x-full");
  }
};
//CHECK OUT
export const checkOutBtnHandler = () => {
  // console.log("check out");
  window.print();
};
