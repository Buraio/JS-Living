import { articleList, createArticle } from "./articleList.js";
import { url, header } from "./getApi.js";

let pageNum = 2;

async function rollPages(counter) {

  try {

    const request = await fetch(`${url}?page=${counter}`, {
      method: 'GET',
      headers: header
    })
    
    if (request.ok) {
      const response = await request.json();

      if (response.previusPage !== null) {

        if (response.news.length === 0) {
          counter++;
          const backUpRequest = await fetch(`${url}?page=${counter}`, {
            method: 'GET',
            headers: header
          })
  
          if (backUpRequest.ok) {
            const backUpResponse = await backUpRequest.json();
  
            renderObserverArticles(backUpResponse.news);
          }
        }
        else {
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
      rollPages(pageNum);
      pageNum++;
    }
  }
})

function renderObserverArticles(arr) {

  arr.forEach(article => {
    const currentArticle = createArticle(article);
    articleList.append(currentArticle);
  });

}

export { observer, observDiv };