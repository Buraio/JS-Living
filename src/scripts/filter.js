import { newsArr } from "./getApi.js";
import { renderArticles } from "./articleList.js";

const filters = document.querySelectorAll('.filter');

async function applyFilter() {

  filters.forEach(filter => {
  
    filter.addEventListener('click', (e) => {
  
      const event = e.target.innerText;
  
      if (event === 'Todos') {
        renderArticles(newsArr);
      }
      else {
        validateFilterText(event);
      }
    })
  })
}

function validateFilterText(event) {

  const newArr = newsArr.filter(article => {

    if (event === article.category) {
      return article;
    }
  
  })
  renderArticles(newArr);
}

function filterToLocalStorage() {

  filters.forEach(filter => {

    filter.addEventListener('click', (e) => {

      const event = e.target.innerText;

      if (event !== 'Todos') {
        localStorage.setItem('appliedFilter', event);
      }
      else {
        localStorage.removeItem('appliedFilter');
      }
    })
  })
}

function getFilterFromLocalStorage() {

  const appliedFilter = localStorage.getItem('appliedFilter');

  if (appliedFilter) {
    validateFilterText(appliedFilter);
  }
  else {
    renderArticles(newsArr);
  }
}

export { applyFilter, filterToLocalStorage, getFilterFromLocalStorage }