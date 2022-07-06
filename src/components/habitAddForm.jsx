import React, { Component } from 'react';

class HabitAddForm extends Component {
  state = {
    newHabit: '',
    input: '',
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.habitAdd(this.state.newHabit);
    this.setState({ newHabit: '', input: '' });
  };
  onChange = (e) => {
    this.setState({ input: e.target.value });
    const newHabit = this.props.habitForm(e);
    this.setState({ newHabit });
  };

  render() {
    return (
      <section className='addForm'>
        <form onSubmit={this.onSubmit}>
          <input
            className='addForm-input'
            placeholder='Habit'
            value={this.state.input}
            onChange={this.onChange}
          ></input>
          <button className='addForm-btn'>Add</button>
        </form>
      </section>
    );
  }
}

export default HabitAddForm;
