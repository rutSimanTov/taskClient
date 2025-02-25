import React, { useEffect, useState } from 'react';
import service from '../service.js';

function ToDoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const todos = await service.getTasks();
    setTodos(todos);
  }

  async function createTodo(e) {
    e.preventDefault();
    try {
      await service.addTask(newTodo);
      setNewTodo("");
      await getTodos();
    } catch (err) {
      console.error("Error creating todo:", err); // Log any error during creation
    }
  }

  async function updateCompleted(todo, isComplete) {
    try {
      await service.setCompleted(todo.id, isComplete);
      await getTodos();
    } catch (err) {
      console.error("Error updating todo completion:", err); // Log any error during update
    }
  }

  async function deleteTodo(id) {
    try {
      await service.deleteTask(id);
      await getTodos();
    } catch (err) {
      console.error("Error deleting todo:", err); // Log any error during deletion
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <section className="todoapp">
        <header className="header mt-3">
          <h1 style={{ textAlign: 'center', color: '#ff6f61' }}>Todos 😊</h1>
          <form className="d-flex justify-content-center" onSubmit={createTodo}>
            <input
              style={{ borderRadius: '20px', padding: '13px', flexGrow: '1', width: 'calc(100% - 200px)' }}
              placeholder="What do you need to do? 📋"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button style={{ borderRadius: '20px', marginLeft: '10px', backgroundColor: '#00aaff', color: 'white', padding: '10px 20px' }} type="submit">Add Task ➕</button>
          </form>
        </header>
        <section className="main mt-4">
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {todos.map(todo => {
              return (
                <li key={todo.id} style={{ marginBottom: '10px', borderRadius: '10px', padding: '10px', backgroundColor: todo.isComplete ? '#c9fbcf' : '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <input
                        style={{ marginRight: '10px' }}
                        type="checkbox"
                        defaultChecked={todo.isComplete}
                        onChange={(e) => updateCompleted(todo, e.target.checked)}
                      />
                      <label>{todo.name} 📝</label>
                    </div>
                    <button style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '10px', padding: '5px 10px' }} onClick={() => deleteTodo(todo.id)}>Delete ❌</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default ToDoList;