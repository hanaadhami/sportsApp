import axios from "axios";

// NBA live games API call
function nbaLiveGames() {
axios({
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
  });
}
// Get Games by Date
// axios({
//   "method":"GET",
//   "url":"https://api-nba-v1.p.rapidapi.com/games/date/2020-03-03",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
//   "x-rapidapi-key":"5691dd8a91msh5d5d95fd469ce68p1d3c4cjsna59d297105be"
//   }
//   })
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

export default nbaLiveGames();