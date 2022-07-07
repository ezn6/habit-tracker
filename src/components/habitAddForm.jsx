import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.handleAdd(name);
    // this.inputRef.current.value = ''; // formRef가 없다면 이방법도 가능
    this.formRef.current.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          className='addForm-input'
          type='text'
          placeholder='Habit'
          ref={this.inputRef}
        ></input>
        <button className='addForm-btn'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
