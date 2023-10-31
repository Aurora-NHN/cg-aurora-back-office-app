import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectToken, setToken} from "~/features/loginSlice";
import {useNavigate} from "react-router-dom";

function Authentication({children}) {
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token){
            const storedToken = localStorage.getItem('token');
            if (!storedToken){
                navigate('/login')
            }else {
                dispatch(setToken(storedToken))
            }
        }
    },[token]);
    return (
        <>
            {children}
        </>
    );
}

export default Authentication;