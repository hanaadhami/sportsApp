import React from "react"

function GameFeature(props) {
    return (
        <div className="gameBox">
            <p>{props.games}</p>
        </div>
    )
}

export default GameFeature;

// export function GameList({ children }) {
//   return <container className="container">{children}</container>;
// }

// export function GameFeature({
//   gameID, 
//   homelogo,
//   hometeam,
//   homescore,
//   awaylogo, 
//   awayteam, 
//   awayscore,
//   timeleft,
//   currentperiod
// }) {
//   return (
//     <div className="list-group-item">
//     <Container>
//       <Row>
//         <Col size="xs-4 sm-2">
//         <Thumbnail src={awaylogo || "https://placehold.it/100x100"} /><h3>{awayteam}</h3>
//         <h4>{awayscore}</h4>
//         </Col>
//         <Col size="xs-4 sm-2">
//         <Thumbnail src={homelogo || "https://placehold.it/100x100"} /><h3>{hometeam}</h3>
//         <h4>{homescore}</h4>
//         </Col>
//       </Row>
//       <Row>
//         <p>{timeleft}</p><br></br><p>{currentperiod}</p>
//       </Row>
//     </Container>
//   </div>
//   )
// }

