import React, { Component } from "react";
import imgToDo from "../img/to-do.png";
import imgInProgress from "../img/in-progress.png";
import imgFinish from "../img/finish.png";
import Skill from "./Skill.jsx";
import { mostrarSkills } from "./Helper";
import NavMovil from "./NavMovil";

export default class MenuPrincipal extends Component {
  state = {
    toDo: [],
    inProgress: [],
    Finish: [],
  };

  componentDidMount = () => {
    const toDo = mostrarSkills(this.props.dataUser.id, 1);
    const inProgress = mostrarSkills(this.props.dataUser.id, 2);
    const Finish = mostrarSkills(this.props.dataUser.id, 3);

    this.setState({
      toDo: toDo,
      inProgress: inProgress,
      Finish: Finish,
    });
  };

  render() {
    return (
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                    >
                      Tecnical Skill App
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  {
                    // <!-- Profile dropdown -->
                  }
                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                    {/*             <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
--> */}
                    {/*
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
</div> */}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {
                  //<!-- Mobile menu button -->
                }
                <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {/*           <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
--> */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*          <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->*/}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/*
    <!--
      Mobile menu, toggle classNamees based on menu state.

      Open: "block", closed: "hidden"
--> */}
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
              >
                Dashboard
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  {
                    // <!-- Heroicon name: bell -->
                  }
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h3>
          </div>
        </header>
        <main>
          <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <header className="flex items-center justify-between">
              <form className="relative">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
                <input
                  className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                  type="text"
                  aria-label="Filter projects"
                  placeholder="Filter projects"
                />
              </form>

              <button className="bg-green-300   transition ease-in duration-200  group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2 hover:bg-green-200 hover:shadow-lg ">
                <svg
                  className="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
                  width="12"
                  height="20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
                  />
                </svg>
                New
              </button>
            </header>
            <NavMovil />

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              <div>
                <section
                  id="todo"
                  className=" pb-2 hover:shadow-lg"
                  data-aos="fade-down"
                >
                  <h1 className="bg-gray-800  p-3 rounded-t-lg text-white text-center">
                    To Do
                  </h1>
                  {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}

                  {Object.keys(this.state.toDo).map((key) => (
                    <Skill
                      key={this.state.toDo[key][0]}
                      nombreSkill={this.state.toDo[key][1]}
                      idSkill={parseInt(this.state.toDo[key][0])}
                      idUser={parseInt(this.props.dataUser.id)}
                      idState={1}
                      img={imgToDo}
                    />
                  ))}

                  {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                </section>
              </div>

              <div>
                <section id="inprogress" data-aos="fade-down">
                  <h1 className="bg-gray-800  p-3 rounded-lg text-white text-center">
                    In Progress
                  </h1>
                  {Object.keys(this.state.inProgress).map((key) => (
                    <Skill
                      key={this.state.inProgress[key][0]}
                      nombreSkill={this.state.inProgress[key][1]}
                      idSkill={parseInt(this.state.inProgress[key][0])}
                      idUser={parseInt(this.props.dataUser.id)}
                      idState={2}
                      img={imgInProgress}
                    />
                  ))}
                  {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}

                  {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                </section>
              </div>

              <div>
                <section id="finish" data-aos="fade-down">
                  <h1 className="bg-gray-800  p-3 rounded-lg text-white text-center">
                    Finish
                  </h1>
                  {Object.keys(this.state.Finish).map((key) => (
                    <Skill
                      key={this.state.Finish[key][0]}
                      nombreSkill={this.state.Finish[key][1]}
                      idSkill={parseInt(this.state.Finish[key][0])}
                      idUser={parseInt(this.props.dataUser.id)}
                      idState={3}
                      img={imgFinish}
                    />
                  ))}
                  {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                </section>
              </div>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}
