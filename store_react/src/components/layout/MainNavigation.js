import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <div className={classes.logo}>
            
                <ul>
                    <li> 
                      <Link to='/'>The Admin</Link>
                    </li>
                    <li>
                      <Link to =''>sales</Link>
                    </li>
                    <li>
                      <Link>sales</Link>
                    </li>
                    <li>
                      <Link>sales</Link>
                    </li>
                </ul>
          
        </div>
    )
}

export default MainNavigation
