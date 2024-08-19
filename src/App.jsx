import React, { useEffect, useState } from 'react'
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todos));
  }, [todos])

  const addTodo = (title) => {
    setTodos(current => {
      return [...current, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  const handleDelete = (id) => {
    setTodos(current => current.filter(item => item.id !== id));
  }

  const toggleTodo = (id, completed) => {
    setTodos(current => {
      return current.map(item => {
        if (item.id === id) {
          return { ...item, completed };
        }

        return item;
      })
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} handleDelete={handleDelete} toggleTodo={toggleTodo} />
    </>
  )
}

export default App