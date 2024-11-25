
import {useContext, createContext } from 'react'

export const TodoContext = createContext( {
    todos:[
        {
            id: 1,
            todoMsg : 'msg',
            completed : false,
        },
    ],

    addTodo:  (todo) => {},
    updateTodo : (id, newTodo) => {},
    deleteTodo : (id) => {},
    toggleCompleted : (id) => {},

} )

export const TodoProvider = TodoContext.Provider


export const useTodo = () => {
    return useContext(TodoContext)
}