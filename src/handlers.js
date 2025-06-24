import { manageInventorySideBar, newProductName } from "./selectors";

//OPEN MANAGE INVENTORY
export const manageInventoryBtnHandler = () => {
  // console.log("You Clicked Managae Inventory Btn");
  // console.log(manageInventorySideBar.classList);
  manageInventorySideBar.classList.remove("translate-x-full");
  manageInventorySideBar.classList.add("duration-400");
  newProductName.focus();
  // event.stopPropagation();
};
//CLOSE MANAGE INVENTORY
export const closeSideBarBtnHandler = () => {
  manageInventorySideBar.classList.add("translate-x-full");
};
//SIDE BAR STOP PROPAGATION
export const sideBarClickHandler = (event) => {
  //To prevent closing sidebar by clicking inside the side bar;
  event.stopPropagation();
};
//CLICK OUTSIDE THE SIDE BAR AND CLOSE IT
export const outSideClickHandler = (event) => {
  // Check if the sidebar is currently open
  if (!manageInventorySideBar.classList.contains("translate-x-full")) {
    // 1. Check if the clicked element is part of the sidebar or the open button
    if (
      manageInventorySideBar.contains(event.target) ||
      manageInventoryBtn.contains(event.target)
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

export const checkOutBtnHandler = () => {
  // console.log("check out");
  window.print();
};
