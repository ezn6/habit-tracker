import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const count = habit.count - 1 < 0 ? 0 : habit.count - 1;
        return { ...habit, count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
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
        <Habits
          habits={this.state.habits}
          buttons={buttons}
          handleAdd={this.handleAdd}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
