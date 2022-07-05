import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log('plus!');
    const habits = [...this.state.habits];
    habits.forEach((item) => {
      if (item.id === habit.id) {
        item.count++;
      }
    });
    this.setState({ habits: habits });
    console.log(habits);
  };

  handleDecrement = (habit) => {
    console.log(habit);
    console.log('minus!');
  };

  handleDelete = (habit) => {
    console.log(habit);
    console.log('delete!');
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
