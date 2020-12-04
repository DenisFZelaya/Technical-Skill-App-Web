import React, { Component } from "react";
import imgToDo from "../img/to-do.png";
import imgInProgress from "../img/in-progress.png";
import imgFinish from "../img/finish.png";
import Skill from "./Skill.jsx";
import { mostrarSkills, crearSkills } from "./Helper";
import NavMovil from "./NavMovil";
import imgUser from "../img/User_Circle.png";
import "./dropdown.css";
import menuClose from "../img/close.png";
import menuLinke from "../img/linke.png";

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

  cerrarSesion = () => {
    const Swal = require("sweetalert2");
    Swal.fire({
      title: "Log out?",
      text: "You will exit the current session.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, exit!",
    }).then((result) => {
      if (result.isConfirmed) {
        //reiniciar el estate
        this.props.reiniciarState();
        Swal.fire("Log out success!", "You have signed out.", "success");
      }
    });
  };

  updateState = (action, uidStateAnt, uidStateNew, uidSkill, unombreSkill) => {
    if (action === "delete") {
      if (uidStateAnt === 1) {
        if (uidStateNew === 1) {
          //no hacer nada
        } else if (uidStateNew === 2) {
          //Eliminar del state 1 y agregar en el state 2
        } else if (uidStateNew === 3) {
        }
      } else if (uidStateAnt === 2) {
        if (uidStateNew === 1) {
        } else if (uidStateNew === 2) {
        } else if (uidStateNew === 3) {
        }
      } else if (uidStateAnt === 3) {
        if (uidStateNew === 1) {
        } else if (uidStateNew === 2) {
        } else if (uidStateNew === 3) {
        }
      }
    } else if (action === "update") {
    }
  };

  agregarSkill = () => {
    const Swal = require("sweetalert2");
    const { value: formValues } = Swal.fire({
      title: "Create Technical Skill",
      html:
        '<input id="swal-input1" class="swal2-input p-2 w-1/1">' +
        "<br>" +
        '<select id="estado" class="p-2">' +
        '<option value="none" disabled>Select a state</option>' +
        '<option value="1">To Do</option>' +
        '<option value="2">In Progress </option>' +
        '<option value="3">Finish</option>' +
        "</select>",

      focusConfirm: false,
      preConfirm: () => {
        var select = document.getElementById("estado").value;

        const create = {};

        create.cNameSkill = document.getElementById("swal-input1").value;
        create.CidUser = this.props.dataUser.id;
        create.CidState = select;

        const crear = crearSkills(
          create.cNameSkill,
          create.CidUser,
          create.CidState
        );

        if (crear) {
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title:
              "Task Skill " + create.cNameSkill + " created successfully. ",
          });
          this.componentDidMount();
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title:
              "Your technical skill: " +
              "'" +
              create.cNameSkill +
              "'" +
              " has not been created.",
          });
        }
      },
    });

    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
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
                    <h1
        
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
              
                    >
                      Tecnical Skill App - {this.props.dataUser.nombre}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="ml-4 flex items-center md:ml-6">
                {
                  // <!-- Profile dropdown -->
                }
                <div className="ml-3 relative">
                  <div>
                    <div className="dropdown w-50">
                      <button
                        className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src={imgUser}
                          alt=""
                        />
                      </button>
                      <ul className="dropdown-menu hidden text-gray-700 pt-1 bg-green-400 rounded p-3 lg:absolute">
                        <hr className="pt-3 hr" />
                        <h1> {this.props.dataUser.nombre}</h1>
                        <hr />
                        <li className="">
                          <button
                            onClick={this.cerrarSesion}
                            className="flex w-full rounded-t bg-green-400 hover:bg-green-200 py-2 px-4 block whitespace-no-wrap"
                          >
                            <img className="pr-1" src={menuClose} alt='imgClose'></img> Close
                          </button>
                        </li>
                        <li className="">
                          <a
                            className=" flex justify-center bg-green-400 hover:bg-green-200 py-2 px-4 block whitespace-no-wrap"
                            target="_blank" rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/denis-federico-zelaya-407409197"
                          >
                            <img className="pr-1" src={menuLinke} alt='imgLinkedIn'></img> Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*
    <!--
      Mobile menu, toggle classNamees based on menu state.

      Open: "block", closed: "hidden"
--> */}
        </nav>

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

              <button
                onClick={this.agregarSkill}
                className="bg-green-300   transition ease-in duration-200  group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2 hover:bg-green-200 hover:shadow-lg "
              >
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
                      componentDidMount={this.componentDidMount}
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
                      componentDidMount={this.componentDidMount}
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
                      componentDidMount={this.componentDidMount}
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
