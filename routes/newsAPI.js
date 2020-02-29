const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9ab006d8e47840359b1f26d42c0565b6');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  category: 'sports',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});