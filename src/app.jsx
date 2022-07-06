import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count += 1;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    this.setState({ habits });
  };

  render() {
    const buttons = [
      this.handleIncrement,
      this.handleDecrement,
      this.handleDelete,
    ];
    return (
      <>
        <Navbar
          counts={this.state.habits.filter((habit) => habit.count > 0).length}
        />
        <HabitAddForm />
        <Habits habits={this.state.habits} buttons={buttons} />
      </>
    );
  }
}

export default App;
