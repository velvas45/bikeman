import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from './components/auth-ui/Login'
import Register from './components/auth-ui/Register'
import PrivateRoute from './PrivateRoute'
import Dashboard from './components/home'
import Cart from './components/cart'
import ProductDetail from './components/project-detail'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <PrivateRoute path="/home" component={Dashboard}/>
            <PrivateRoute path="/products/:id" component={ProductDetail}/>
            <PrivateRoute path="/cart" component={Cart}/>
            <Route path="/register" render={() => <Register/>} />
        </Switch>
    )
}

export default Routes