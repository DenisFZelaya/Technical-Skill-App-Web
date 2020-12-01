import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div class="flex shadow-lg m-2 p-2 rounded-lg" data-aos="fade-up-right">
        <div class="flex- w-48  ">
          <img
            src={this.props.img}
            alt=""
            class=" w-full h-full object-none rounded-lg"
          />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">
              {this.props.nombreSkill}
            </h1>
            <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              more info
            </div>
          </div>
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
              <button
                class="w-1/2 flex items-center justify-center rounded-md bg-blue-300 text-white p-2 hover:shadow-sm"
                type="submit"
              >
                Edit
              </button>
              <button
                class="w-1/2 flex  text-white items-center justify-center rounded-md border  border-gray-300 p-2 bg-red-600"
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
