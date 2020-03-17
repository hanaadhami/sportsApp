import React from "react";
import { Container, Row, Col } from '@material-ui/core';
import { Thumbnail } from '@material-ui/lab';

export function GameList({ children }) {
  return <container className="container">{children}</container>;
}

export function GameFeature({
  gameID, 
  homelogo,
  hometeam,
  homescore,
  awaylogo, 
  awayteam, 
  awayscore,
  timeleft,
  currentperiod
}) {
  return (
    <div className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
        <Thumbnail src={awaylogo || "https://placehold.it/100x100"} /><h3>{awayteam}</h3>
        <h4>{awayscore}</h4>
        </Col>
        <Col size="xs-4 sm-2">
        <Thumbnail src={homelogo || "https://placehold.it/100x100"} /><h3>{hometeam}</h3>
        <h4>{homescore}</h4>
        </Col>
      </Row>
      <Row>
        <p>{timeleft}</p><br></br><p>{currentperiod}</p>
      </Row>
    </Container>
  </div>
  )
}

// import React from "react"
// import "./Joke.scss";

// function Joke(props) {
//     return (
//         <div className="jokeBox">
//             <p>{props.joke}</p>
//         </div>
//     )
// }

// export default Joke;