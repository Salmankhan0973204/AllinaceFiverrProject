import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss'
import Todos from '../todos/Todos'

const Dashboard = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='dashboard'>
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? '' : null}`}></i>
        </div>
        <div className='pt-3'><p>Profile</p></div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
          
            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active  dashboard-nav'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/todo' className='nav-link dashboard-nav'>
                <i className='fas fa-tasks nav-link-icon '></i>
                <span className='nav-link-name'>Task</span>
              </Link>
              <Link to='/gallery' className='nav-link  dashboard-nav'>
                <i className='fas fa-calendar nav-link-icon'></i>
                <span className='nav-link-name'>Calendar</span>
              </Link>
             
            </div>
          </div>

          {/* <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link> */}
        </nav>
      </aside>
   <div>
    <h1>Dashboard</h1>
   </div>

      
    </main>
    </div>
  );
};

export default Dashboard;