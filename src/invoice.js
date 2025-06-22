import { initialRender } from "./initialRender";
import listener from "./listener";
import observer from "./observer";

class Invoice {
  init() {
    console.log("Invoice App Started");
    observer();
    initialRender();
    listener();
  }
}
export default Invoice;
