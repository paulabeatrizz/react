import {useState} from 'react';
import {login, logout} from '../store'
import {useDispatch, useSelector} from 'react-redux';

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);

    return (
        <h1>
            HI {username} THIS IS THE LOGIN PAGE
            <input onChange={(e) => {setNewUsername(e.target.value);}}/>
            <button onClick={() => dispatch(login({username : newUsername}))}>submit login</button>
            <button onClick={() => dispatch(logout())}> logout</button>
        </h1>
    );
};