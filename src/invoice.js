import { initialRender } from "./initialRender";
import listener from "./listener";

class Invoice {
  init(){
  console.log("Invoice App Started");
  initialRender();
  listener();
  }
}
export default Invoice;