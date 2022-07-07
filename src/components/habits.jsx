import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  // onClick = () => {};
  render() {
    const habits = this.props.habits;
    const [handleIncrement, handleDecrement, handleDelete] = this.props.buttons;
    return (
      <>
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <button className='reset' onClick={this.props.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
