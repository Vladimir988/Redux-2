import React, {useEffect} from 'react';
import {useAppDispatch, useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    // const dispatch = useAppDispatch();
    const {fetchUsers} = useActions();

    useEffect(() => {
        // dispatch(fetchUsers());
        fetchUsers();
    }, []);

    if(loading) {
        return <h1>Loading...</h1>;
    }

    if(error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;