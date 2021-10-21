import classes from './Body.module.css'
import { Link } from 'react-router-dom'

const Body = () => {
    return(
    <div className={classes.alot}>
      <h1>The store</h1>
        <form className={classes.wrapper}>
        <div className={classes.control}>
            <input type="text" placeholder='Email' />
        </div>
        <div className={classes.control}>
            <input type="text" placeholder='password' />
        </div>
        <Link to ='/Home'>
        <button>Log in</button>
        </Link>
       </form>
    </div>
    )
}

export default Body
