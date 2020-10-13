import React, { Component } from 'react';

require('./styles.scss');

class Table extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <table className='CROWNTable'>
        <thead>
          <tr className='Header'>
            {this.props.header.map(head => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.body.map(row => (
            <tr className='Body'>
              {row.map(cell => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

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
  ]

};

export default Table;