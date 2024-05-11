import React from "react"; // rafce

const AddTodo = (props) => {
  const [task, setTask] = React.useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (!task) {
      alert("Input is empty!");
      return;
    }
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    props.handleTask(newTask);
    setTask("");
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
