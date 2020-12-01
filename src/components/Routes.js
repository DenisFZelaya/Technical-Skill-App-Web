import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login.jsx';
import Registrer from './Registrer.jsx';

export default class Routes extends Component {

  componentDidMount = () => {
    if(this.props.stateApp.login === false) {
      console.log('no estas logueado');
      return <Redirect to='/login' />
    } else {
      console.log('te acabas de loguear');
      //window.Location = '/';
      return <Redirect to='/' />
    }
  }


  render() {
    return (
      <Router>
        <Switch>
          {this.componentDidMount()}
          <Route
            exact
            path='/login'
            render={() => (
              <Login
                toFillUser={this.props.toFillUser} 
                componentDidMount={this.componentDidMount}/>
            )} />
          <Route path='/registrer'>
            <Registrer />
          </Route>
          <Route path='/'>
            Menu Principal
          </Route>
        </Switch>
      </Router >
    )
  }
}
