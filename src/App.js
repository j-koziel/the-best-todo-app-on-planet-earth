import "./App.css";

import { useState } from "react";

const TodoTask = ({ nr, label, description, remove }) => {
  return (
    <div className="todo-container">
      <h2>
        {nr} - {label}
      </h2>
      <p>{description}</p>
      <button className="remove-task-btn" onClick={remove}>
        remove task
      </button>
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [newLabel, setNewLabel] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    const tempTasks = [...tasks];
    tempTasks.push({ label: newLabel, description: newDescription });

    setTasks(tempTasks);

    setNewDescription("");
    setNewLabel("");
    setShowForm(false);
  };

  const removeTask = (i) => {
    const tempTasks = [...tasks];
    tempTasks.splice(i, 1);

    setTasks(tempTasks);
  };

  return (
    <div className="App">
      <div className="header-container">
        <div className="logo-container">...logo</div>
        <div className="nav-buttons-container">
          <a href="#" className="nav-button">
            nav button
          </a>
          <a href="#" className="nav-button">
            nav button
          </a>
          <a href="#" className="nav-button">
            nav button
          </a>
          <a href="#" className="nav-button">
            nav button
          </a>
        </div>
      </div>

      <div className="app-content">
        {tasks.length === 0 ? (
          <h2 className="no-tasks">You have no tasks</h2>
        ) : null}

        {tasks.map((task, i) => (
          <TodoTask
            nr={i + 1}
            label={task.label}
            description={task.description}
            remove={() => removeTask(i)}
          />
        ))}
        <button className="add-task-btn" onClick={() => setShowForm(!showForm)}>
          ADD TASK
        </button>

        {showForm ? (
          <form className="form-container" onSubmit={addTask}>
            <h3>Label</h3>
            <input
              type="text"
              value={newLabel}
              onChange={(e) => {
                setNewLabel(e.target.value);
              }}
            />
            <h3>Description</h3>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => {
                setNewDescription(e.target.value);
              }}
            />
            <button type="submit">ADD TASK</button>
          </form>
        ) : null}
      </div>

      <div className="footer-container">...some footer links</div>
    </div>
  );
}

export default App;
