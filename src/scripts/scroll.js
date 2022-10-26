import { articleList, createArticle } from "./articleList.js";
import { url, header } from "./getApi.js";

let pageNum = 1;

async function rollPages(counter) {

  try {

    const request = await fetch(`${url}?page=${counter}`, {
      method: 'GET',
      headers: header
    })
    
    if (request.ok) {
      const response = await request.json();

      console.log(response)
      if (response.previusPage !== null) {

        if (response.news.length === 0) {
          counter++;
          const jumpRequest = await fetch(`${url}?page=${counter}`, {
            method: 'GET',
            headers: header
          })
  
          if (jumpRequest.ok) {
            const response = await jumpRequest.json();
            console.log(response.news)
  
            renderObserverArticles(response.news);
          }
        }
        else {
          console.log(response.news);
    
          renderObserverArticles(response.news);
        }
      }
    }
  }
  catch (err) {
    console.log(err);
  }
}

const observDiv = document.querySelector('.observDiv');

const observer = new IntersectionObserver(elements => {

  if (elements.some(element => element.isIntersecting)) {
    if(!localStorage.getItem('appliedFilter')) {
      console.log(pageNum)
      rollPages(pageNum++);
    }
  }
})

function renderObserverArticles(arr) {

  arr.forEach(article => {
    const item = createArticle(article);
    articleList.append(item);
  });

}

export { observer, observDiv };