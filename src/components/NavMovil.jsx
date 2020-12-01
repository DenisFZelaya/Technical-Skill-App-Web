import React, { Component } from 'react';
import iconToDo from '../img/iconToDo.png';
import iconInProgress from '../img/iconInProgress.png';
import iconFinish from '../img/iconFinish.png';

export default class NavMovil extends Component {
    render() {
        return (
            <nav className='justify-between fixed nav-movil flex content-center rounded-t-lg mx-3 fixed bg-gray-500  inset-x-0 bottom-0 w-50 md:invisible'>
              <a href='#todo' className='p-2'><img className='flex' src={iconToDo} alt='iconToDo'></img> </a>
              <a href='#inprogress' className='p-2'> <img className='flex' src={iconInProgress} alt='iconToDo'></img></a>
              <a href='#finish' className='p-2'> <img className='flex' src={iconFinish} alt='iconToDo'></img></a>
            </nav>
        )
    }
}
