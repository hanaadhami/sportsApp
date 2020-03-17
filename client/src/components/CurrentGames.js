import React from 'react';
import { Table } from 'reactstrap';
import SingleCurrentGame from './SingleCurrentGame';


const CurrentGames = () => {

  return (
    <Table>
      <thead>
        <tr>
          <th>Team 1</th>
          <th>Score</th>
          <th>Team 2</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
      <SingleCurrentGame />
      </tbody>
    </Table>
  );
}

export default CurrentGames