import classes from './Body.module.css'

const Home = () => {
    return (
 <div>
    <div className={classes.admin}>
        <button className={classes.bts}>Admin page</button>
    </div>
    <div className={classes.admin}>
        <button className={classes.bts}>sales records</button>
    </div>
    <div className={classes.admin}>
        <button className={classes.bts}>Admin page</button>
    </div>
 </div>    
    )
}

export default Home
