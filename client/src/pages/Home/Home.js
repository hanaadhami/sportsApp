import React, { Component } from "react";
// import CurrentGames from '../../components/CurrentGames';
import PastGames from '../../components/PastGames';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./Home.scss";
import CurrentGames from "../../components/CurrentGames";


class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
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

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <div className="sidebar">
              <CurrentGames />
              <PastGames />
              
            </div>
          </Col>
          <Col xs="9">
            <div className="dashboardBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Home;