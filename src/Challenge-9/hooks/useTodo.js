import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        // console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo,
        };

        dispatch(action);
    };

    

    const handleToggleTodo = (id) => {
        console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    };

    return {
        todos,
        handleNewTodo,
        
        handleToggleTodo

    }
};
