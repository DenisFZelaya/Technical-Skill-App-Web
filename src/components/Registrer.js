import React, { Component } from 'react'

export default class Registrer extends Component {
    render() {
        return (
<div className="mt-5 md:mt-0 md:col-span-2   min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form action="#" method="POST" className='shadow-lg p-10 rounded-2xl'>
        <div className=" overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 ">
                <label for="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="last_name" className="block text-sm font-medium text-gray-700" >User Name</label>
                <input type="text" id="last_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label for="email_address" className="block text-sm font-medium text-gray-700 " >Email address</label>
                <input type="text" id="email_address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Registrer
            </button>
          </div>
        </div>
      </form>
</div>
        )
    }
}
