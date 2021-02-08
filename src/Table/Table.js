import React from 'react';

const Table = ({
  header,
  body,
  extraStyle
}) => (
  <table className={`CROWNTable ${extraStyle}`}>
    <thead>
      <tr className='Header'>
        {header.map((head, key) => (
          <th key={`head-${key}`}>{head}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map((row, key_row) => (
        <tr className='Body' key={`row${key_row}`}>
          {row.map((cell, key_cell) => (
            <td key={`cell${key_cell}`}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.defaultProps = {
  header: ['NOMBRE', 'APELLIDO', 'CARRERA', 'PROMEDIO'],
  body: [
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100']
  ],
  extraStyle: ''
};

export default Table;