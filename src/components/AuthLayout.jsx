import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Protected({children,authentication=true}) {
    let navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const  authStatus = useSelector(state => state.status)

    useEffect(()=>{
            if(authentication && authStatus !== authentication){
                navigate("/login")
            }else if(!authentication && authStatus!== authentication){ // 
                navigate("/")
            }
            setLoader(false)
    },[authStatus,navigate,authentication])

    return loader ? <h1>loading...</h1> : <>{children}</>

};










/*
this is nothing but a wrapper which controls the children it renders in it 
this is just a mechanism to control the routes and various pages with respect to the condition that they are authenticated or not
i.e.

*/