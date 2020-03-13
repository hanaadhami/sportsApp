import React, { Component } from "react";
import API from "../../utils/API";
import "./Home.scss";

class Home extends Component {

  state = {
    loggedIn: false,
    games: []
  };

  componentDidMount() {
    this.loggedIn();
    this.getGames();
    // API.getPastGames().then(res => setGames(res.data))
    // .catch(err => console.log(err));
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  getGames = () => {
    API.getPastGames().then(res => {
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="homeBox">
        
      </div>
    );
  }
}

export default Home;