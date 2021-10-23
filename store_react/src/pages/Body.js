import React,{ useState } from 'react';
import classes from './Body.module.css'
import Validation from './Validation';


const Body = () => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({});

    const handleChange =(event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
     }


    const handleFormsubmit =(event) =>{
      event.preventDefault();
      setErrors(Validation(values));
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
             {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className={classes.control}>
            <input type="text"
             placeholder='email' 
             name="email" value={values.email}
              onChange={handleChange}
              />
               {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className={classes.control}>
            <input type="text" placeholder='password' 
            name="password" 
            value ={values.password} 
            onChange={handleChange} 
            />
             {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button onClick={handleFormsubmit}>Log in</button>
 
       </form>
    </div>
    )
}

export default Body
