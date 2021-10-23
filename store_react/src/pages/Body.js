import React,{ useState } from 'react';
import classes from './Body.module.css'


const Body = () => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:""
    })
    const handleChange =(event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
     }


    const handleFormsubmit =(event) =>{
      event.preventDefault();
    }
    return(
    <div className={classes.alot}>
      <h1>The store</h1>
        <form className={classes.wrapper}>
        <div className={classes.control}>
            <input type="text" placeholder='username'
             name="username" 
             value={values.username} 
             onChange={handleChange}
             />
        </div>
        <div className={classes.control}>
            <input type="text"
             placeholder='email' 
             name="email" value={values.email}
              onChange={handleChange}
              />
        </div>
        <div className={classes.control}>
            <input type="text" placeholder='password' 
            name="password" 
            value ={values.password} 
            onChange={handleChange} 
            />
        </div>
        <button onClick={handleFormsubmit}>Log in</button>
 
       </form>
    </div>
    )
}

export default Body
