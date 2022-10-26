const title = document.querySelector('title');
console.log(title.innerText);
const header = document.querySelector('.headerCont');
const main = document.querySelector('.mainCont');
console.log(main)

completeArticle();

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

  header.append(articleHeading, articleDesc);
  main.append(articleImg, articleContent);

}

goBackToHomepage();

function goBackToHomepage() {

  const homeBtn = document.querySelector('.backToHome');

  homeBtn.addEventListener('click', () => {
    location.replace('../../../index.html');
  })
}