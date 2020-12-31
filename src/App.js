import React from 'react';
import MenuPrincipal from './components/MenuPrincipal.jsx';
import AccessUser from './components/AccessUser.jsx';

class App extends React.Component {


  state = {
    'login': false,
    'dataUser': {}
  }

  componentDidMount = () => {
    if(localStorage.getItem('nombre')) {
      const user = {};
      user.id = localStorage.getItem('id')
      user.nombre = localStorage.getItem('nombre')

      this.setState({
        'login': true,
        'dataUser': {
          'id': user.id,
          'nombre': user.nombre
        }
      })
    }
  }

  //Funcion para guardar el usuario en el state
  toFillUser = (idUser, nameUser) => {

    localStorage.setItem('login', true);
    localStorage.setItem('id', idUser);
    localStorage.setItem('nombre', nameUser);

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

    localStorage.clear();
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