import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index.js'
import Home from './pages/Home/index.js'
import User_Page from './pages/User_Page/index.js'
import Create_Products from './pages/Create_Products/index.js'
import Edit_Products from './pages/Edit_Products/index.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/user_page" component={User_Page} />
                <Route path="/create_products" component={Create_Products} />
                <Route path="/edit_products" component={Edit_Products} />
            </Switch>
        </BrowserRouter>
    )
}