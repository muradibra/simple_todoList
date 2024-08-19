import React, { useState } from 'react'

function NewTodoForm({ onSubmit }) {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (newTodo.trim() === '') return;

        onSubmit(newTodo);

        setNewTodo('');
    }

    return (
        <form className='new-item-form' onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id='item' value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            </div>

            <button className='btn'>Add</button>
        </form>
    )
}

export default NewTodoForm