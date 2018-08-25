import React from 'react';

const ListEntry = props => (
  <div>
    <button onClick={() => props.deleteTodo(props.todo)}>DONE</button>
    {props.todo}
  </div>
);

export default ListEntry;
