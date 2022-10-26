import { getNews, newsArr } from "./getApi.js";
import { renderArticles } from "./articleList.js";

async function applyFilter() {

  const filters = document.querySelectorAll('.filter');
  console.log(filters)

  filters.forEach(filter => {
  
    filter.addEventListener('click', (e) => {
  
      const event = e.target.innerText;
  
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
    })
  })
}

export { applyFilter }