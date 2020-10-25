import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super();
    this.state = {
      optionSelected: props.placeholder
    };
    this.setOption = this.setOption.bind(this);
  }

  setOption(option) {
    this.setState({
      optionSelected: option
    });
  }

  render() {
    return (
      <div className='CROWNDropDown'>
        <div className='Options'>
          {this.state.optionSelected}
        </div>
        <div className='ListContent'>
          {
            this.props.options.map((option, index) => (
              <div className='Option' key={`option-${index}`} onClick={() => this.setOption(option)}> {option} </div>
            ))
          }
        </div>
      </div>
    );
  }
}

DropDown.defaultProps = {
  options: [ 'Button', 'Common', 'DropDown', 'Image', 'InputText', 'Label', 'RadioButton', 'Switch' ],
  placeholder: 'Selecciona una opcion'
};

export default DropDown;