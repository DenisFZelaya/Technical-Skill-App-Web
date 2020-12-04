import React, { Component } from "react";
import { eliminarSkills, editarSkills } from "./Helper";

export default class Skill extends Component {
  //Predeterminar una opcion segun el estado de la skill actual
  stateSkillPred = () => {
    if (this.props.idState === 1) {
      return (
        '<option value="none" disabled>Select a state</option>' +
        '<option value="1" selected>To Do</option>' +
        '<option value="2">In Progress </option>' +
        '<option value="3">Finish</option>' +
        ""
      );
    } else if (this.props.idState === 2) {
      return (
        '<option value="none" disabled>Select a state</option>' +
        '<option value="1" >To Do</option>' +
        '<option value="2" selected>In Progress </option>' +
        '<option value="3">Finish</option>' +
        ""
      );
    } else if (this.props.idState === 3) {
      return (
        '<option value="none" disabled>Select a state</option>' +
        '<option value="1" >To Do</option>' +
        '<option value="2" >In Progress </option>' +
        '<option value="3" selected>Finish</option>' +
        ""
      );
    }
  };

  //Editar una tarea
  editSkill = () => {
    const name = this.props.nombreSkill;
    const Swal = require("sweetalert2");
    const { value: formValues } = Swal.fire({
      title: "Edit Technical Skill",
      html:
        '<input id="swal-input1" class="swal2-input p-2 w-1/1" value="' +
        name +
        '">' +
        "<br>" +
        '<select id="estado" class="p-2">' +
        this.stateSkillPred() +
        "</select>",

      focusConfirm: false,
      preConfirm: () => {
        var select = document.getElementById("estado").value;

        var editUser = this.props.idUser;
        var editSkill = this.props.idSkill;
        var editIdState = select;
        var editNameSkill = document.getElementById("swal-input1").value;

        const editar = editarSkills(
          editUser,
          editSkill,
          editIdState,
          editNameSkill
        );

        if (editar === true) {
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
            title: "Skill " + editNameSkill + " edited successfully. ",
          });

          this.props.componentDidMount();
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

          console.log(formValues);

          Toast.fire({
            icon: "success",
            title:
              "Your technical skill: " +
              "'" +
              this.props.nombreSkill +
              "'" +
              " has not been edited.",
          });
        }
      },
    });
  };

  deleteSkill = () => {
    const Swal = require("sweetalert2");
    Swal.fire({
      title: "Are you sure?",
      text: `Delete Technical Skill '${this.props.nombreSkill}'`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const eliminar = eliminarSkills(this.props.idUser, this.props.idSkill);
        if (eliminar === true) {
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
              `Your technical skill '${this.props.nombreSkill}' has been deleted.`,
          });
          this.props.componentDidMount();
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
            title: "His technical skill has not been eliminated",
          });
        }
      }
    });
  };

  render() {
    return (
      <div
        className="flex shadow-lg m-0 p-0 rounded-lg"
        data-aos="fade-up-right"
      >
        <div className="flex- w-48  ">
          <img
            src={this.props.img}
            alt=""
            className=" w-full h-full object-none rounded-lg"
          />
        </div>
        <form className="flex-auto p-2">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              {this.props.nombreSkill}
            </h1>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              more info
            </div>
          </div>
          <div className="flex space-x-3 mb-2 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
              <button
                onClick={this.editSkill}
                className="w-1/2 flex items-center justify-center rounded-md bg-blue-300 text-white p-2 hover:shadow-sm"
                type="submit"
              >
                Edit
              </button>
              <button
                onClick={this.deleteSkill}
                className="w-1/2 flex  text-white items-center justify-center rounded-md border  border-gray-300 p-2 bg-red-600"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
