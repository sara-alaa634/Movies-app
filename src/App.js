import React from 'react';
import Home from "./Component/Home"
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom"
import SinglePage from './Component/SinglePage';


const App = () => {
  return ( 
<Router>
<div>
<Switch>
< Route path="/" component={Home}/>
<Route path="/singlePage/:id" component={SinglePage}/>
</Switch>


</div>  
</Router>
  );
}
 
export default App;

