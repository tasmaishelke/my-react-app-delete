import { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import './registration.css'

function Registration()
{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const details = (e) =>
    {
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(firstName)
        console.log(lastName)
    }


    return(
        <>
            <div className="class-registration-form">
                <form onSubmit={details}>
                    <h1>Registration</h1>

                    <label htmlFor="email"> Email </label>
                    <div className="input">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="name@gmail.com" name="email" />                        
                        <FaUser className="icon" />
                    </div>

                    <label htmlFor="password"> Password </label>
                    <div className="input">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*****" name="password" />                        
                        <FaLock className="icon"/>
                    </div>
                    
                    <label htmlFor="firstName"> First Name </label>
                    <div className="input">
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" />                        
                        <FaUser className="icon" />
                    </div>

                    <label htmlFor="lastName"> Last Name </label>
                    <div className="input">
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" />                        
                        <FaUser className="icon" />
                    </div>

                    <button className="class-registration-button" type="submit" > Sign-Up </button>

                    <div className="class-login-link">
                        <p> Already have an account? <a href="/login"> Login </a> </p>
                    </div>
                </form>
            </div>                
        </>
    )
}

export default Registration
