import { renderArticles } from "./articleList.js";
import { newsArr } from "./getApi.js";
import { applyFilter, getFilterFromLocalStorage } from "../scripts/filter.js";

getFilterFromLocalStorage();

applyFilter();
