import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectToken, setToken} from "~/features/loginSlice";
import {useNavigate} from "react-router-dom";

function Index(){
    const token = useSelector(selectToken);
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            dispatch(setToken(storedToken));
        } else {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        if (token) {
            setLoggedIn(true);
        } else if (token === null){
            setLoggedIn(false);
        }
    }, [token]);

    return(
        <>

        </>
    );
}
export default Index