import React,{useState} from 'react'
import {Link} from 'react-router-dom';
const Login = () =>{
    const[userInp,setuserInp]=useState('');
    const[passInp,setpassInp]=useState('');



    const user = (e) =>{
     setuserInp(e);
    }

    const pass = (e) =>{
        setpassInp(e);
       }
     
       const sub = (e) =>{
        e.preventDefault();

         localStorage.setItem("username",userInp);
         localStorage.setItem("password",passInp);
       }
    return(
        <section className="container mb-5">
            <h2 className="text-center pb-4">Login</h2>
            <form className="frm d-flex justify-content-between flex-column align-items-center"> 
                <div className="inp mb-2">
                   <input type="text" name='user' onChange={(e)=>user(e.target.value)} value={userInp} placeholder='user name' aria-label='username'></input>
                
                </div>
                <div className="inp mb-2">
                   <input type="password" name='pass'  onChange={(e)=>pass(e.target.value)} value={passInp} placeholder='password' aria-label='password'></input>
                </div>
                <div className="inp mb-2">
                    <button onClick={(e)=>sub(e)}>login</button>
                </div>
                <p>{localStorage.getItem("username")}</p>
                <Link to="/signup">create a account</Link>
            </form>
        </section>
    )
}

export default Login;