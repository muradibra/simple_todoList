import React from 'react'

function TodoItem({ id, title, toggleTodo, handleDelete }) {
    return (
        <li key={id}>
            <label>
                <input type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>

            <button onClick={() => handleDelete(id)} className='btn btn-danger'>Delete</button>
        </li>
    )
}

export default TodoItem