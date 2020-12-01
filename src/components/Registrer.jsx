import React, { Component } from "react";

export default class Registrer extends Component {
  editarSeccion = () => {
    this.props.cambiarSeccion("login");
  };

  render() {
    return (
      <section
        id="registrer"
        className="transition-opacity w-100"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center bg-gray-50 py-5 px-4  sm:px-6 py-12 min-h-screen float-left  py-0 px-0 lg:px-8 ">
          <div className="max-w-md w-full space-y-8  ">
            <form
              className=" lg: p-5 pt-0 space-y-6  shadow-lg  rounded-2xl"
              action="#"
              method="POST"
            >
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Create a account now
                </h2>
              </div>
              <input type="hidden" name="remember" value="true" />
              <div>
                <label for="email-address" className="">
                  Full Name
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Please enter your full name"
                />
              </div>
              <div>
                <label for="email-address" className="">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name User"
                />
              </div>
              <div className=" shadow-sm -space-y-px">
                <div>
                  <label for="password" className="">
                    User Name
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email-address" className="">
                    Password
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Repeat Password"
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
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                  </span>
                  Create account
                </button>
              </div>

              <div className="flex items-center justify-between"></div>
              <div className="flex justify-center">
                <button
                  onClick={this.editarSeccion}
                  type="submit"
                  className="justify-end py-2 px-4 border border-transparent
                  text-sm font-medium rounded-md text-white  hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  bg-green-400 w-4/6  sm:w-6/6 "
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Login
                </button>
              </div>
            </form>
            <div className="text-sm sm:invisible ">
              <a
                className="m-5 text-center"
                href="#inicio"
                data-aos="fade-down"
              >
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
          </div>
        </div>
      </section>
    );
  }
}
