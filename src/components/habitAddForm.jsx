import React, { memo } from 'react';

// function HabitAddForm(props){} 과 동일
const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.handleAdd(name);
    // inputRef.current.value = ''; // formRef가 없다면 이방법도 가능
    formRef.current.reset();
  };

  console.log('habitAddForm');
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input
        className='addForm-input'
        type='text'
        placeholder='Habit'
        ref={inputRef}
      ></input>
      <button className='addForm-btn'>Add</button>
    </form>
  );
});

export default HabitAddForm;

// class HabitAddForm extends Component {
//   inputRef = React.createRef();
//   formRef = React.createRef();

//   onSubmit = (e) => {
//     e.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.handleAdd(name);
//     // this.inputRef.current.value = ''; // formRef가 없다면 이방법도 가능
//     this.formRef.current.reset();
//   };

//   render() {
//     console.log('habitAddForm');
//     return (
//       <form onSubmit={this.onSubmit} ref={this.formRef}>
//         <input
//           className='addForm-input'
//           type='text'
//           placeholder='Habit'
//           ref={this.inputRef}
//         ></input>
//         <button className='addForm-btn'>Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
