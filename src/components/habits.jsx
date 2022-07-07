import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    console.log('habits');

    const habits = this.props.habits;
    const [handleIncrement, handleDecrement, handleDelete] = this.props.buttons;
    return (
      <div>
        <HabitAddForm handleAdd={this.props.handleAdd} />
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
      </div>
    );
  }
}

export default Habits;
