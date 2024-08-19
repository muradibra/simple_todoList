import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, handleDelete }) {
    return (
        <ul className='list'>
            {!todos.length && "No Items to Display"}
            {
                todos.map(todo => (
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete} />
                ))
            }
        </ul>
    )
}

export default TodoList