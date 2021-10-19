import classes from './Body.module.css'

const Body = () => {
    return(
    <div>
      <h1>The store</h1>
        <form className={classes.wrapper}>
        <div className={classes.control}>
            <input type="text" placeholder='Email' />
        </div>
        <div className={classes.control}>
            <input type="text" placeholder='password' />
        </div>
        <button>Log in</button>
       </form>
    </div>
    )
}

export default Body
