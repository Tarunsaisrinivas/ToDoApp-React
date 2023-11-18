import React, { useState } from 'react';
import './todo.css';

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ['Important', 'Notmpiortant', 'Useless'];

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const addTask = () => {
    if (task && selectedCategories.length > 0) {
      selectedCategories.forEach((category) => {
        setTasks((prevTasks) => [
          ...prevTasks,
          { text: task, categories: category },
        ]);
      });
      setTask('');
      setSelectedCategories([]);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleTaskChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="categories">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="tasks">
        {categories.map((category) => (
          <div className="category" key={category}>
            <h2>{category}</h2>
            <ul>
              {tasks.map((t, index) => (
                t.categories.includes(category) && (
                  <li key={index}>{t.text}</li>
                )
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
