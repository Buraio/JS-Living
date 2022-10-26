const url = 'https://m2-api-living.herokuapp.com/news';
const header = { 'Content-Type': 'application/json' };
const pageEndpoint = '?page=';

async function getNews(selection) {

  try {

    const request = await fetch(url, {
      headers: header
    })
    // console.log(request)
    if (request.ok) {
      const response = await request.json();
      console.log(response)
      if (selection === 'news') {
        console.log(response.news)
        return response.news;
      }
      return response;
    }
  }
  catch (err) {
    console.log(err);
  }
}

async function getById(id) {

  try {

    const request = await fetch(`${url}/${id}`, {
      headers: header
    })
    console.log(request)
    if (request.ok) {
      const response = await request.json();
      console.log(response)
      return response;
    }
  }
  catch (err) {
    console.log(err);
  }
}

const newsArr = await getNews('news');
console.log(newsArr)

export { getNews, getById, newsArr }