const title  = document.querySelector('title');
const containerDiv = document.querySelector('.container');
const mainContainer   = document.querySelector('.mainCont');

function completeArticle() {

  const getArticle = JSON.parse(localStorage.getItem('accessArticle'));

  const articleHeading = document.createElement('h2');
  const articleDesc    = document.createElement('p');
  const articleImg     = document.createElement('img');
  const articleContent = document.createElement('p');

  articleHeading.classList.add('articleHeading');
  articleDesc.classList.add('articleDesc');
  articleImg.classList.add('articleImg');
  articleContent.classList.add('articleContent');

  title.innerText = getArticle.title;

  articleHeading.innerText = getArticle.title;
  articleDesc.innerText = getArticle.description;
  articleImg.src = getArticle.image;
  articleContent.innerText = getArticle.content;

  containerDiv.append(articleHeading, articleDesc);
  mainContainer.append(articleImg, articleContent);

}

function goBackToHomepage() {
  const homeBtn = document.querySelector('.backToHome');
  homeBtn.addEventListener('click', () => {
    location.replace('../../../index.html');
  })
}

export { completeArticle, goBackToHomepage }