import React, { Component } from "react";
import PastGames from '../../components/PastGames';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./Home.scss";
import CurrentGames from "../../components/CurrentGames";
import CommentCard from "../../components/CommentCard";
import CommentWrite from "../../components/CommentWrite";

class Home extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     games: [],
  //     isLoaded: false
  //   }
  // }
  state = {
    loggedIn: false,
    games: []
  };

  componentDidMount() {
    this.loggedIn();
    API.sportsNews();
    API.getPastGames();
    // .then(res => res.json())
    // .then(json => {
    //   this.setState({
    //     isLoaded: true,
    //     games: json
    //   })
    // });
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
    API.getPastGames().then(response => {
      let gamesArray = response.data.api.games.replace([]);
      this.setState({
        games: gamesArray
      })
      console.log(gamesArray)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <div className="sidebar" style={{
              padding: "40px 10px",
              fontFamily: 'Lato'}}>
              <CurrentGames 
              style={{
              padding: "40px 0px"}}
              />
              <PastGames />
            </div>
          </Col>
          <Col xs="9">
            <div className="dashboardBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <CommentWrite />
              {//need to add a container component for comment cards where all comment cards get appended 
              }
              <CommentCard />
            </div>
          </Col>
        </Row>
      </Container>

      );
    }
  }

export default Home;