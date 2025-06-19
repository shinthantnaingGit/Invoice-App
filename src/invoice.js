import { initialRender } from "./initialRender";
import listener from "./listener";
import { observeFunction } from "./observer";

class Invoice {
  init(){
  console.log("Invoice App Started");
  observeFunction();
  initialRender();
  listener();
  }
}
export default Invoice;