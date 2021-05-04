import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADD_TODO, DELETE_TODO } from './redux/actions/actionTypes';

const App = () => {
  const [value, setValue] = useState('');
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    // setTodos((prevState) => [...prevState, value]);
    dispatch({ type: ADD_TODO, payload: value });
    setValue('');
  };
  const handleDelete = (index) => {
    dispatch({ type: DELETE_TODO, payload: index });
    // setTodos((prevState) => [
    //   ...prevState.filter((todo, indx) => indx !== index),
    // ]);
  };

  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAdd}>Add todo</button>
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <p>{todo}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
