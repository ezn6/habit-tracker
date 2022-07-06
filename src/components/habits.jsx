import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    const habits = this.props.habits;
    const [handleIncrement, handleDecrement, handleDelete] = this.props.buttons;
    return (
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
    );
  }
}

export default Habits;
