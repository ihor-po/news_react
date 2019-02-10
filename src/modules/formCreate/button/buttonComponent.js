import React, { Component } from 'react';

class ButtonComponent extends Component {
  render() {
    return (
        <button 
        className="mdc-button" 
        onClick={this.props.onClick} 
        disabled={(!this.props.disabled) ? 'disabled' : ''}
        >
            <i className="material-icons mdc-button__icon" aria-hidden="true">done_outline</i>
            <span className="mdc-button__label">Показать</span>
        </button>
    );
  }
}

export default ButtonComponent;


