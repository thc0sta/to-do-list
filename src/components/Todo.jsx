import React from 'react';

// componente que representa uma tarefa individual
 const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
           <div className='todo' style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}> 
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
          <button className='complete' onClick={() => completeTodo(todo.id)}>
            {todo.isCompleted ? 'Desfazer' : 'Completar'}
          </button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
        </div>
      </div>
  )
};

export default Todo;