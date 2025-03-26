import React from 'react';

export default function TodoItem(props) {
  return (
    <div>
      <h3>Todos</h3>
      {props.TodoItem.length === 0 ?
        "No Todo to Display" : (
        <ul>
          {props.TodoItem.map((todo) => (
            <li key={todo.id} className="d-flex align-items-center mb-2  border-bottom">
              <div>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => props.deleteTodo(todo)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
