import React,{useState} from "react";
import axios from 'axios';

const registerUrl='https://0jqj7swob1.execute-api.ap-northeast-1.amazonaws.com/pro/register'
export const Register =(props)=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username.trim() ==='' || email.trim() ==='' || password.trim()===''){
            console.log(username);
        }
        const requestConfig={
            Headers:{
                'x-api-key':'bLmzjZoe9da66YvBmaafN5zB0ZnFxeZ847Ug2M1n'
            }
        }
        const requestBody={
            username:username,
            email:email,
            password:password
        }
        axios.post(registerUrl,requestBody,requestConfig).then(response =>{
            console.log('register successfully');
        })
        
    }

    return(
        <>
        <div className="auth-from-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="enter the username" id="username" name="username"/>
                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter the email" id="email" name="email"/>
                
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="enter the password" id="password" name="password" />
                
                <button  type="submit" value="Register">Register</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')} type="submit">Login here.</button>
        </div>
        </>
    )
}


