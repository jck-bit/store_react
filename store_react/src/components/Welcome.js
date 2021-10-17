import classes from'./Welcome.module.css'

const Welcome = () => {
    return (
        <form>
           <div className={classes.control}>
               <label>Enter Your email</label>
               <input type ="text" placeholder='Email'/>
           </div> 
           <div className={classes.control}>
               <label>Enter Your email</label>
               <input type ="text" placeholder='Email'/>
           </div> 
        </form>
    )
}

export default Welcome
