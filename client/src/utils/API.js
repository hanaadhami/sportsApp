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
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

};