import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  // checks live NBA games
  getLiveGames: async function() {
    return axios({
      "method":"GET",
      "url":"https://api-nba-v1.p.rapidapi.com/games/live/",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key":"5691dd8a91msh5d5d95fd469ce68p1d3c4cjsna59d297105be"
      }
      })
      .then((response)=>{
        console.log(response.data.api.games)
      })
      .catch((error)=>{
        console.log(error)
      })
  },

  // NBA (along with many other sporting events) cancelled, therefore no live games to show. This API call can check games by specific date. 
getPastGames: async function() {
  return axios({
    "method":"GET",
    "url":"https://api-nba-v1.p.rapidapi.com/games/date/2020-03-08",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
    "x-rapidapi-key":"5691dd8a91msh5d5d95fd469ce68p1d3c4cjsna59d297105be"
    }
    })
    .then((response)=>{
      console.log(response);
      // var gamesArray = response.data.api.games;
      // // for (let i = 0; i < gamesArray.length; i++) {
      // //   var gameID = [i].gameId;
      // //   var awayTeam = [i].vTeam.fullName;
      // //   var awayLogo = [i].vTeam.logo;
      // //   var awayScore = [i].vTeam.score.points;
      // //   var homeTeam = [i].hTeam.fullName;
      // //   var homeLogo = [i].hTeam.logo;
      // //   var homeScore = [i].hTeam.score.points;
      // //   var timeLeft = [i].clock;
      // //   var period = [i].currentPeriod;
      // // }
    })
    .catch((error)=>{
      console.log(error)
    })
  },

  // API to query top News Headlines
  sportsNews: function() {
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
    },

    ChuckNorris: function() {
      return axios.get("https://api.icndb.com/jokes/random")
      .then(response => {
        console.log(response)
      })
    }
}