import React, { Component } from 'react';

class ButtonComponent extends Component {
  click = (e) => {
      e.preventDefault();
  }

  render() {
    console.log()
    return (
        <button className="mdc-button" onClick={this.click} disabled={(!this.props.disabled) ? 'disabled' : ''}>
            <i className="material-icons mdc-button__icon" aria-hidden="true">done_outline</i>
            <span className="mdc-button__label">Показать</span>
        </button>
    );
  }
}

export default ButtonComponent;


