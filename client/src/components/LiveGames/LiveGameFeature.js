import React from "react";
import { Container, Row, Col } from '@material-ui/core';
import { Thumbnail } from '@material-ui/lab';

export function LiveGameList({ children }) {
  return <container className="container">{children}</container>;
}

export function LiveGameFeature({
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
        </Col>
        <Col size="xs-4 sm-2">
        <Thumbnail src={homelogo || "https://placehold.it/100x100"} /><h3>{hometeam}</h3>
        </Col>
      </Row>
    </Container>
  </div>
  )
}