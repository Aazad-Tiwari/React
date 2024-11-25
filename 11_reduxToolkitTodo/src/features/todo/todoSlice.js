import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [],
     editingTodo : null,
}

export const todoSlice = createSlice( {
    name : "Todo",
    initialState,
    reducers : {

        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
        },

        updateTodo : (state , action) => {
            const {id, updatedText} = action.payload
            state.todos = state.todos.map( (todo) => todo.id === id ? {...todo , text: updatedText} : todo  )
        },

        setEditingTodo : (state, action) => {
            state.editingTodo = action.payload;
        },

        clearEditingTodo : (state) => {
            state.editingTodo = null;
        }

    }
} )

export const {addTodo, removeTodo, updateTodo, setEditingTodo, clearEditingTodo} = todoSlice.actions

export default todoSlice.reducer