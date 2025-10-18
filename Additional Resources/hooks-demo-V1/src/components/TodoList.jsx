import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      dispatch({ type: 'ADD_TODO', text: inputText });
      setInputText('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Todo List ({todos.length} items)</h4>
        
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter todo..."
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>

        <ul className="list-group">
          {todos.map(todo => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <div>
                <button
                  className={`btn btn-sm ${todo.completed ? 'btn-warning' : 'btn-success'} me-2`}
                  onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
                >
                  {todo.completed ? 'Undo' : 'Done'}
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;