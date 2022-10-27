import { newsArr } from "./getApi.js";
import { renderArticles } from "./articleList.js";

const filterList = document.querySelectorAll('.filter');

async function applyFilter() {

  filterList.forEach(filter => {
  
    filter.addEventListener('click', (e) => {
  
      const event = e.target.innerText;
  
      filterList.forEach(item => item.classList.remove('selected'));

      filter.classList.add('selected');

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

  const filteredArticles = newsArr.filter(article => {
    if (event === article.category) {
      return article;
    }
  })
  renderArticles(filteredArticles);
}

function filterToLocalStorage() {

  filterList.forEach(filter => {

    filter.addEventListener('click', (e) => {

      const event = e.target.innerText;

      addSelectedClass(filterList, event);

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
    addSelectedClass(filterList, appliedFilter);
    validateFilterText(appliedFilter);
  }
  else {
    renderArticles(newsArr);
    filterList.forEach(filter => {
      if (filter.innerText === 'Todos') {
        filter.classList.add('selected');
      }
    })
  }
}

function addSelectedClass(arr, text) {

  cleanSelectedClass(arr);

  arr.forEach(item => {
    if (item.innerText === text) {
      item.classList.add('selected');
    }
  })
}

function cleanSelectedClass(arr) {
  arr.forEach(item => item.classList.remove('selected'));
}

export { applyFilter, filterToLocalStorage, getFilterFromLocalStorage }