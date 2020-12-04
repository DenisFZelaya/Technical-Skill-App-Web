import React, { Component } from "react";
import { Login } from "./Helper";
import {alertError} from './AlertHelper';

export default class login extends Component {
  emailRef = React.createRef();
  claveRef = React.createRef();


  //Funcion que toma los datos del formulario
  obtenerUsuario = (e) => {
    e.preventDefault();

    //Guardar el resultado de la funcion externa Login en dataUser
    const dataUser = Login(
      this.emailRef.current.value,
      this.claveRef.current.value
    );

    //Hacer si el usuario es correcto
    if (dataUser.answer === "correct") {
      //Alerta bienvenida al iniciar sesion
      const Swal = require('sweetalert2');
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Welcome ' + dataUser.nameUser
      })

      //Enviar datos a la funcion que llena los datos en el Access User
      this.props.toFillUser(dataUser.idUser, dataUser.nameUser);

      //hacer si la clave del usuario es incorrecto
    } else if (dataUser.answer === "keysIncorrect") {
      console.log("Contrase;a es incorrecta");
      alertError('<strong>Key Incorrect</strong>');
    } else {
      //Si no coincide la contrase;a o email
      alertError('<strong>User or Key Incorrect</strong>');
    }
  };

  //cambiar el state section para imprimir el componente
  editarSeccion = () => {
    this.props.cambiarSeccion("registrer");
  };

  render() {
    return (
      <section id="login" className="transition-opacity" data-aos="fade-up">
        <div className="flex items-center justify-center bg-gray-50 py-5 px-4  sm:px-6 py-12 min-h-screen float-left  py-0 px-0 lg:px-8 ">
          <div className="max-w-md w-full space-y-8      shadow-lg p-6 rounded-2xl">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={this.obtenerUsuario}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    ref={this.emailRef}
                  />
                </div>
                <div>
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    ref={this.claveRef}
                  />
                </div>
              </div>

              <div className="divide-y-2 divide-dashed md:divide-solid">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Login
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <h1 className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </h1>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={this.editarSeccion}
                  type="submit"
                  className="justify-end py-2 px-4 border border-transparent
          text-sm font-medium rounded-md text-white  hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          bg-green-400 w-4/6  sm:w-6/6 "
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-15 w-2 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Create acount
                </button>
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              </div>
            </form>
          </div>
        </div>
        <div className="text-sm sm:invisible ">
          <a className="m-5 text-center" href="#inicio" data-aos="fade-up">
            <svg
              className="animate-bounce animate-pulse  mx-auto h-12 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </section>
    );
  }
}
