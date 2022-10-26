import { renderArticles } from "./articleList.js";
import { newsArr } from "./getApi.js";
import { applyFilter } from "../scripts/filter.js";

applyFilter();

renderArticles(newsArr);