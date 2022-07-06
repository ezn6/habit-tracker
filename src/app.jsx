import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

// function App() {
//   return <Habits />;
// }

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
    navbarCnt: 0,
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count += 1;
    habits[index].count === 1
      ? this.setState({ navbarCnt: this.state.navbarCnt + 1, habits: habits })
      : this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count -= 1;
    if (habits[index].count <= 0) {
      habits[index].count = 0;
      this.setState({ navbarCnt: this.state.navbarCnt - 1, habits: habits });
    } else {
      this.setState({ habits });
    }
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    if (this.state.navbarCnt === 0) {
      this.setState({ habits });
    } else {
      //else navbarCnt >=1 일때의 조건이면
      //habit.count가 0이면 그대로, 1이상이면 -1
      if (habit.count === 0) {
        console.log('111');
        this.setState({ habits });
      } else {
        this.setState({ navbarCnt: this.state.navbarCnt - 1, habits: habits });
        console.log('222');
      }
    }
  };

  render() {
    const buttons = [
      this.handleIncrement,
      this.handleDecrement,
      this.handleDelete,
    ];
    return (
      <>
        <Navbar counts={this.state.navbarCnt} />
        <Habits habits={this.state.habits} buttons={buttons} />
      </>
    );
  }
}

export default App;
