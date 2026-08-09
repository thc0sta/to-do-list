import React from 'react'

// componente que representa uma tarefa individual
 const Todo = ({todo}) => {
  return (
           <div className='todo'> 
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
          <button className='complete'>Completar</button>
          <button className='remove'>x</button>
        </div>
      </div>
  )
}

export default Todo;