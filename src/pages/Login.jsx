import { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";

function Login()
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const details = (e) =>
    {
        e.preventDefault()
        console.log(email)
    }

    return(
        <>
            <div className="class-login-form">
                <form onSubmit={details}>
                    <h1>Login</h1>

                    <div className="input">
                        <label htmlFor="email"> Email </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="name@gmail.com" name="email" />
                        <FaUser className="icon" />
                    </div>

                    <div className="input">
                        <label htmlFor="password"> Password </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*****" name="password" />
                        <FaLock className="icon"/>
                    </div>
                    
                    <button className="login-button" type="submit" > Log-In </button>

                    <div className="register-link">
                        <p> Dont have an account? <a href="/registration"> Register </a> </p>
                    </div>
                </form>
            </div>           
        </>
    )
}

export default Login