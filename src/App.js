import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login.js'
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
        {/* <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/Home">其他页</Link></li>
        </ul> */}
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Redirect to="/" />
        </Switch>
      </div>
      </Router>
      </div>
    );
  }
}
class Home extends React.Component {
  render () {
    return (
      <div>Home</div>
    )
  }
}

export default App;
