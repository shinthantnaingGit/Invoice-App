import { calculateRecordCostTotal, calculateRecordTax } from "./record";
import { recordGroup, recordNetTotal, recordTax, recordTotal } from "./selectors";

export const observeFunction = () => {
  console.log("Record Group Observed");
  const total = calculateRecordCostTotal();
  const tax = calculateRecordTax(total);
  const netTotal = total + tax;
  recordTotal.innerText = total;
  recordTax.innerText = tax;
  recordNetTotal.innerText = netTotal;
};

const productRowGroupObserver = new MutationObserver(observeFunction);

const config = { attributes: true, childList: true, subtree: true };

productRowGroupObserver.observe(recordGroup, config);
