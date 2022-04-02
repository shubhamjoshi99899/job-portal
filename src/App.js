import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Submit from './Submit'

const App = () => {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/button' component={Submit}/>
       
     </Switch>
    </div>
  )
}

export default App
