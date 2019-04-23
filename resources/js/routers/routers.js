import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <h1>Main Page</h1>} />
            <Route path="/test" component={() => <h1>text Page</h1>} />
        </Switch>
    </BrowserRouter>
)
