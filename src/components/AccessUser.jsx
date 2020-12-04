import React, { Component } from "react";
import Login from "./Login.jsx";
import Registrer from "./Registrer.jsx";
import infoLogo from '../img/info.png';
import imgLinkedin from '../img/SocialNet/linkedin.png';

export default class AccessUser extends Component {

  state = {
    'section' : 'login'
  }

  //Funcion para cambiar la seccion puede ser login o registrer
  cambiarSeccion = (seccion) => {
    this.setState({
      'section' : seccion
    })
  }

  //Mostrar componente login o registro segun el state
  section = () => {
    if(this.state.section === 'login') {
      return <Login 
      toFillUser = {this.props.toFillUser}
      cambiarSeccion = {this.cambiarSeccion}
      />
    } else if (this.state.section === 'registrer'){
      return <Registrer 
      cambiarSeccion = {this.cambiarSeccion}/>
    }
  }

  render() {
    return (
      <div class="grid grid-cols-1  bg-gray-50   sm:grid-cols-2 gap-1">
        <section id="inicio" data-aos="fade-up">
          
          <div class="">
            <div className="flex items-center justify-center bg-gray-50   py-5 px-4  sm:px-6 py-12 min-h-screen float-right  py-0 px-0 lg:px-8 ">
              <div className="max-w-md w-full space-y-8    ">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 pb-5">
                    Technical Skills App
                  </h2>
                  <a className='flex justify-center pt-2' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/denis-federico-zelaya-407409197' >
                      <img src={imgLinkedin} alt='LinkedIn'></img>
                  </a>
                  <a className='flex justify-center pb-2' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/denis-federico-zelaya-407409197'>Dev. Denis Federico Zelaya</a>

                  <img
                    className=" md:desocultar  "
                    src={infoLogo}
                    alt="Workflow"
                  />
                  <p className="mt-6 text-center  text-gray-900">
                    Thought in the Kamban model to control your technical
                    skills.
                  </p>
             
    
         
                </div>
                <div className="text-sm sm:invisible ">
                  <a
                    className="m-5 text-center shadow-lg"
                    href={'#'+this.state.section}
                    data-aos="fade-down"
                  >
                    <svg
                      className="animate-bounce animate-pulse mx-auto h-12 w-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="w-100">
          {/* Imprimir la seccion login/registrer segun el state */}
          {this.section()}
        </div>
      </div>
    );
  }
}
