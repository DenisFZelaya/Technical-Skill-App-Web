import React, { Component } from "react";
import Login from "./Login.jsx";
import Registrer from "./Registrer.jsx";
import infoLogo from '../img/info.png';

export default class AccessUser extends Component {

  state = {
    'section' : 'login'
  }

  cambiarSeccion = (seccion) => {
    this.setState({
      'section' : seccion
    })
  }

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
          {this.section()}
        </div>
      </div>
    );
  }
}
