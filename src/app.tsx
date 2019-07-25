import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Home from 'src/components/home'

const Root = () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)

export default Root
