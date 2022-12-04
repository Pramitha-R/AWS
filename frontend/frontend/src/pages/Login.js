import React, {useState} from "react";

export const Login =(props)=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username);
    }

    return(
        <>
        <div className="auth-from-container">
            <form className="login-form" onSubmit={handleSubmit} >
                <label htmlfor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="enter the username" id="username" name="username"/>
                <label htmlfor="password">Password</label>
                <input value={password} onChange= {(e)=> setPassword(e.target.value)} type="password" placeholder="enter the password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('Register')} type="submit">Register</button>
        </div>
        </>
    )
}


