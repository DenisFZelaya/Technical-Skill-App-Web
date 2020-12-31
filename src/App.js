import React from 'react';
import MenuPrincipal from './components/MenuPrincipal.jsx';
import AccessUser from './components/AccessUser.jsx';

class App extends React.Component {


  state = {
    'login': false,
    'dataUser': {}
  }

  //Funcion para guardar el usuario en el state
  toFillUser = (idUser, nameUser) => {
    this.setState({
      'login': true,
      'dataUser': {
        'id': idUser,
        'nombre': nameUser
      }
    })

  }

  reiniciarState = () => {
    this.setState({
      'login' : false,
      'dataUser' : {}
    })
  }

  do = () => {
    if(this.state.login === true){
      return <MenuPrincipal 
      dataUser = {this.state.dataUser}
      reiniciarState = {this.reiniciarState}
      />
    } else {
      return <AccessUser 
      toFillUser={this.toFillUser}/>
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.do()}
      </React.Fragment>
    )
  }
}

export default App;