import React from "react"; //rafce

const TodoList = (props) => {
    let styles = {
        listStyleType: 'none',
        color: 'red'
    };

  return (
  <ul style={styles}>
    {props.todos.map((item) => ( // если вместо фигурных скобок использовать круглые ретерн будет автоматический
        <li key={item.id} className={item.status ? 'completed' : ''} >
            <input type="checkbox" onChange={() => props.changeStatus(item.id)}/>
            {item.task}
        </li>
      ))}
  </ul>
  )
};

export default TodoList;
