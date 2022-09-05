import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box } from "@mui/material";
import './Calendar.scss'

export default function Calender() {
  const eventDates=[new Date ('02/03/2022'),new Date ('02/06/2022')]
  const [value, setValue] = useState( (eventDates));
  const [show, setShow] = useState(true);

  return (
    <div className='calendar'>
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
              <Link to='/dashboard' className='nav-link  dashboard-nav'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/todo' className='nav-link dashboard-nav'>
                <i className='fas fa-tasks nav-link-icon '></i>
                <span className='nav-link-name'>Task</span>
              </Link>
              <Link to='/gallery' className='nav-link active dashboard-nav'>
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
      <div className='mt-5'>
      <Box className="PanelCalender" >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
          label='sadsadsd'
        />
      </LocalizationProvider>
    </Box>
    </div>
    </main>
    </div>
  );
};

