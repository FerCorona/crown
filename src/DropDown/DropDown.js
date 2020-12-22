import React, { Component } from 'react';

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
    this._toggleActive = this._toggleActive.bind(this);
  }

  _toggleActive() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const { optionSelected, options, onChange, stateName } = this.props;
    return (
      <div className='CROWNDropDown'>
        <div className='Options' onClick={() => this._toggleActive()}>
          {optionSelected}
        </div>
        {
          this.state.isActive && (
            <div className='ListContent'>
              {
                options.map((option, index) => (
                  <div
                    className='Option'
                    key={`option-${index}`}
                    onClick={() => this.setState({ isActive: false },
                      onChange({
                        stateName,
                        value: option
                      }))}
                  >
                    {option}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}

DropDown.defaultProps = {
  options: [ 'Button', 'Common', 'DropDown', 'Image', 'InputText', 'Label', 'RadioButton', 'Switch' ],
  placeholder: 'Selecciona una opcion',
  onChange: () => { }
};

export default DropDown;