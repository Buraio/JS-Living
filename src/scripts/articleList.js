import { getNews, getById } from "./getApi.js";

const articleList = document.querySelector('.articleList');

function createArticle(element) {

  const articleLi      = document.createElement('li');
  const articleImg     = document.createElement('img');
  const articleHeading = document.createElement('h3');
  const articleDesc    = document.createElement('p');
  const articleBtn     = document.createElement('button');

  articleLi.classList.add('article');
  articleImg.classList.add('articleImg');
  articleHeading.classList.add('articleHeading');
  articleDesc.classList.add('articleDesc');
  articleBtn.classList.add('articleBtn');

  articleBtn.setAttribute('data-article', element.id);
  accessArticleEvent(articleBtn);

  articleImg.src = element.image;
  articleHeading.innerText = element.title;
  articleDesc.innerText = element.content;
  articleBtn.innerText = 'Acessar conteúdo';

  articleLi.append(articleImg, articleHeading, articleDesc, articleBtn);

  return articleLi;

}

const newsArr = await getNews('news');
console.log(newsArr)

function renderArticles(arr) {

  articleList.innerHTML = '';
  arr.forEach(article => {
    const item = createArticle(article);
    articleList.append(item);
  });

}

renderArticles(newsArr);

function accessArticleEvent(button) {

  button.addEventListener('click', async (e) => {

    const event = e.target.getAttribute('data-article');
    console.log(event)

    const article = await getById(event);
    localStorage.setItem('accessArticle', JSON.stringify(article));

    location.replace('../../src/pages/article/index.html');

  })

}