import React from 'react';

function createData(name1, score1, name2, score2) {
    return { name1, score1, name2, score2 };
}
//need to replace this data with stuff from the Sports API, all current games from the sport and league that the user selects
const rows = [
    createData('Name', 12, 'Name', 8),
    createData('Name', 23, 'Name', 7),
];


const PastGames = () => {
    return (
        rows.map(row => (
            <tr key={row.name}>
                <td>{row.name1}</td>
                <td>{row.score1}</td>
                <td>{row.name2}</td>
                <td>{row.score2}</td>
            </tr>
        )
        )
    )
};

export default PastGames