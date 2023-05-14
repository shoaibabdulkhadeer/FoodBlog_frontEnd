import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { BsLockFill} from 'react-icons/bs';

const Signup = () => {
  return (
    <div>

<div className='heading'>
             <h2 className='title'>FOOD BLOG</h2>
             <p className='newuser'>Already a user? 
             <Link to='/'>
             Sign In
             </Link>
             </p>
             </div>

<div className='Signin'>
 
  

             
            <div className='main'>


            <div className='formdiv'>
                  
                  <form>
                      <div className='greeting'>
                      <h1 className='welcome'>Welcome Back!</h1>
                  <p className='con'>Signup to continue</p>
                      </div>

                      <div className='emaildiv' >
                          <FaUserCircle size={20} className='userlogo'/>
                      <input type="text" placeholder='Name' required/>
                      </div>

                      <div className='emaildiv' >
                          <FaUserCircle size={20} className='userlogo'/>
                      <input type="text" placeholder='Enter Your Email' required/>
                      </div>


                      <div className='password'>
                      <BsLockFill size={20} className='userlogo'/>
                      <input type="text" placeholder='Enter Your Password' required/>
                      </div>

                      <div className='password'>
                      <BsLockFill size={20} className='userlogo'/>
                      <input type="text" placeholder='Confirm Password' required/> 
                      </div>
                 
                      <button>Sign Up</button>
                  </form>
              </div>
                
                <img src="/images/bg.png" alt="" width={650}/>

               
            </div>

        </div>

    </div>
  )
}

export default Signup