import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputText from '../InputText';

require('./styles.scss');

class DropDown extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { options } = this.props;
    const id = uuidv4();
    return (
      <>
        <InputText list={id} id={`${id}-id`} />
        <datalist name={`List-${id}`} id={id} onInput={this.onChangeOption}>
          {
            options.map(value => <option value={value} key={value} />)
          }
        </datalist>
      </>
    );
  }
}

DropDown.defaultProps = {
  options: [ 'Button', 'Common', 'DropDpown', 'Image', 'InputText', 'Label', 'RadioButton', 'Switch' ]
};

export default DropDown;