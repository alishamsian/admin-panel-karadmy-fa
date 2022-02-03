import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Categories from '../pages/Categories'
import Comments from '../pages/Comments'

const Routesss = () => {
    return (
        <Routes>
            <Route path='/'  element={<Dashboard />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/comments' element={<Comments />} />
        </Routes>
    )
}

export default Routesss