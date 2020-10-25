import React, { Component } from 'react';

import Label from '../Label';

class RadioButton extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    }, this.props.radioUpdated(changeEvent.target.value));
  }

  render() {
    return (
      <div className='CROWNRadioButton' role='radiogroup' aria-labelledby='bulgy-radios-label'>
        {
          this.props.options.map(option => (
            <label>
              <input type='radio' value={option.id} checked={this.state.selectedOption === option.id} onChange={this.handleOptionChange} />
              <span className='Radio' />
              <div className='Label'>
                <Label size='small' text={option.label} color='--black-0' weight='ligth_x' />
              </div>
            </label>
          ))
        }
      </div>
    );
  }
}

RadioButton.defaultProps = {
  options: [
    {
      label: 'Si',
      id: 'si_option'
    },
    {
      label: 'No',
      id: 'no_option'
    },
    {
      label: 'Tal vez',
      id: 'tal_vez_option'
    }
  ],
  radioUpdated: isChecked => console.log(isChecked)
};

export default RadioButton;