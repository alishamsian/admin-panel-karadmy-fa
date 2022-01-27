import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Categories from '../pages/Categories'
import Comments from '../pages/Comments'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
            <Route path='/products' component={Products} />
            <Route path='/orders' component={Orders} />
            <Route path='/categories' component={Categories} />
            <Route path='/comments' component={Comments} />
        </Switch>
    )
}

export default Routes