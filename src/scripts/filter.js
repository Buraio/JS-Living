import { getNews, newsArr } from "./getApi.js";
import { renderArticles } from "./articleList.js";

const filters = document.querySelectorAll('.filter');

async function applyFilter() {

  filters.forEach(filter => {
  
    filter.addEventListener('click', (e) => {
  
      const event = e.target.innerText;
  
      validateFilterText(event);
    })
  })
}

function validateFilterText(event) {

  if (event === 'Todos') {
    renderArticles(newsArr);
  }
  else {

    const newArr = newsArr.filter(article => {

      if (event === article.category) {
        return article;
      }
    
    })
    renderArticles(newArr);
  }
}

function filterToLocalStorage() {

  filters.forEach(filter => {

    filter.addEventListener('click', (e) => {

      const event = e.target.innerText;

      localStorage.setItem('appliedFilter', event);

    })
  })
}

function getFilterFromLocalStorage() {

  const appliedFilter = localStorage.getItem('appliedFilter');

  if (appliedFilter) {

    validateFilterText(appliedFilter);
    localStorage.removeItem('appliedFilter');

  }
}

export { applyFilter, filterToLocalStorage, getFilterFromLocalStorage }