import classes from'./Welcome.module.css'

const Welcome = () => {
    return (
        <form className={classes.wrapper}>
           <div className={classes.control}>
              <input type ="text" placeholder='Email'/>
           </div> 
           <div className={classes.control}>
                <input type ="text" placeholder='password'/>
           </div> 
           <button>Log in</button>
        </form>
    )
}

export default Welcome
