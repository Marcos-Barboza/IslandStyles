import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Login from 'src/components/login'

const Root = () => (
  <Router>
    <Route path="/" component={Login} />
  </Router>
)

export default Root
