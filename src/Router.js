import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';


// Start Router function here //
const AppRouter = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About}/>
            <Route path="/car/:id" component={Car}/>
        </Switch>
    )
}

export default AppRouter;

