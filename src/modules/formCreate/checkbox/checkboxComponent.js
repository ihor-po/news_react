import React, { Component } from 'react';

class CheckboxComponent extends Component {
  state = {
    title: this.props.title,
    fieldName: this.props.fieldName,
    checked: false,
    checkbox: React.createRef()
  }
  componentDidMount() {

  }

  changeState = () => {
    this.setState({checked: this.state.checkbox.current.checked});
  }

  render() {
    return (
        <div>
        <label className='add__checkrule'>
          <input type='checkbox' onChange={this.changeState} ref={this.state.checkbox}/> Я согласен с правилами
        </label>
        </div>
    );
  }
}

export default CheckboxComponent;