import { Route,Switch } from 'react-router-dom'
import Body from "./pages/Body";
import Home from './pages/Home';

function App() {
  return (
    <div>
    <Switch>  
     <Route path ='/'exact>
       <Body/>
     </Route>
     <Route path ='/Home'>
       <Home/>
     </Route>
    </Switch>
  
    </div> 
    
  );
}

export default App;
