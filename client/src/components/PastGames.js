import React from 'react';
import { Table } from 'reactstrap';



function createData(name1, score1, name2, score2) {
  return { name1, score1, name2, score2 };
}

const rows = [
  createData('Name', 12, 'Name', 8),
  createData('Name', 23, 'Name', 7),
  createData('Name', 2, 'Name', 24),
  createData('Name', 35, 'Name', 67),
  createData('Name', 3, 'Name', 9),
];


class PastGames extends React.Component {
  render() {
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
      {rows.map(row => (
              <tr>
                <td>{row.name1}</td>
                <td>{row.score1}</td>
                <td>{row.name2}</td>
                <td>{row.score2}</td>
              </tr>
            ))}
      </tbody>
      </Table>

    );
  }
}

export default PastGames;
