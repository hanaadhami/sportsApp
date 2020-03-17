import React, { Component } from "react";
import PastGames from '../../components/PastGames';
import { Container, Row, Col, Alert } from 'reactstrap';
import API from "../../utils/API";
import "./Home.scss";
import NbaAlert from "../../components/NbaAlert/NbaAlert";
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
    gamesArray: [],
    game: {}
  };

  async componentDidMount() {
    this.loggedIn();
    // API.sportsNews();

    API.getPastGames()
    .then(gamesArray => {
      this.setState({gamesArray: gamesArray})
      console.log(this.gamesArray)
    })
    .catch(err => console.log(err))
    
    
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
        <NbaAlert></NbaAlert>
        <Row>
          {/* <Col xs="3">
            <div className="homeBox">
              <GameFeature games={this.state.games}/>

            </div>
          </Col> */}
          <Col xs="3">
            <div className="sidebar" style={{
              padding: "40px 10px",
              fontFamily: 'Lato'
            }}>
              <hr />
              <h2>Current Games</h2>
              <CurrentGames
                style={{
                  padding: "40px 0px"
                }}
              />
              <hr />
              <h2>Past Games</h2>
              <PastGames games={this.state.games}/>
            </div>
          </Col>
          <Col xs="9">
            <div className="dashboardBody">
              <h4 style={{
                color: "#6184D1"

                }}>Time passed: <span className ="timePassed"></span></h4>
            <hr />


              <div classname="scoreSection wrapper" style={{
                  display: "grid",
                  gridColumnGap: "10px",
                  gridTemplateColumns: "auto auto"

                }}>
                <div className="team1ScoreSection">
                  <h2 className="team1">
                    Team Name
                  </h2>
                  <h4>
                    Points: <span className="team1Score"></span>
                  </h4>
                  </div>
                <div className="team2ScoreSection">
                  <h2 className="team2">
                      Team Name
                    </h2>
                    <h4>
                      Points: <span className="team2Score"></span>
                    </h4>
                  </div>
                </div>
              <hr />
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