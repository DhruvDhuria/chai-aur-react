import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'



function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = useState("")
    const [isEditId, setIsEditId] = useState(null)

   const updateHandler = (id) => {
    if(todoMsg.trim() !== '') {
      
      dispatch(updateTodo( {id, text: todoMsg}))
      setIsEditId(null)
      setTodoMsg("")
    }
   }

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {isEditId === todo.id ? (
              <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                className="text-black px-2 py-1 rounded"
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <div className='flex gap-2'>
              {isEditId === todo.id? 
              (<button
              onClick={() => updateHandler(todo.id)}
              className='text-white px-4 py-1 bg-blue-500 border-0 focus:outline-none hover:bg-blue-600 rounded text-md'
              >
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="rgba(255,255,255,1)"
              className='w-6 h-6'
              ><path d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"></path></svg>
              </button>)
              : 
              (<button
              onClick={() => {
                setIsEditId(todo.id)
                setTodoMsg(todo.text)
              }}
              className='text-white px-4 py-1 bg-blue-500 border-0 focus:outline-none hover:bg-blue-600 rounded text-md'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="rgba(255,255,255,1)"
                className='w-6 h-6'
                ><path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path></svg></button>) }
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo;