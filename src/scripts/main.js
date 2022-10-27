import { applyFilter, filterToLocalStorage, getFilterFromLocalStorage } from "../scripts/filter.js";
import { observDiv, observer } from "./scroll.js";

getFilterFromLocalStorage();

applyFilter();

filterToLocalStorage();

observer.observe(observDiv);