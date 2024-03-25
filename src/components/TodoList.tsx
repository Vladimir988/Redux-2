import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todos);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if(loading) {
        return <h1>Loading...</h1>;
    }

    if(error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            {pages.map((p, index) =>
                <span onClick={() => setTodoPage(p)} key={index}>{p}</span>
            )}
        </div>
    );
};

export default UserList;