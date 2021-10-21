import classes from './Body.module.css'
import Layout from '../components/layout/Layout'

const Home = () => {
    return (
<div className={classes.width}>
    <Layout/>
  <div className={classes.admin}>
    <div>
        <button className={classes.bts}>Admin page</button>
    </div>
    <div>
        <button className={classes.bts}>sales records</button>
    </div>
    <div>
        <button className={classes.bts}>Admin page</button>
    </div>
 </div>
 <div className={classes.admin2}>
    <div>
        <button className={classes.bts}>Admin page</button>
    </div>
    <div>
        <button className={classes.bts}>Admin page</button>
    </div>
    <div>
        <button className={classes.bts}>Admin page</button>
    </div>
</div>
</div>   
    )
}

export default Home
