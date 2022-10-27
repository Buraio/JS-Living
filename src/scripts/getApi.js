const url = 'https://m2-api-living.herokuapp.com/news';
const header = { 'Content-Type': 'application/json' };

async function getNews(selection) {

  try {

    const request = await fetch(url, {
      method: 'GET',
      headers: header
    })
    if (request.ok) {
      const response = await request.json();
      if (selection === 'news') {
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
      method: 'GET',
      headers: header
    })
    if (request.ok) {
      const response = await request.json();
      return response;
    }
  }
  catch (err) {
    console.log(err);
  }
}

const newsArr = await getNews('news');

export { url, header, getNews, getById, newsArr }