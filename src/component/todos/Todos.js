/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import "./Todos.scss";
import { v4 as uuidv4 } from "uuid";
import { collapseClasses } from "@mui/material";

const Todos = () => {
  const unique_id = uuidv4();
  const [show, setShow] = useState(true);
  const userEmail = localStorage.getItem("useremail");
  const [task, setTask] = useState([]);
  const [uniqueData, setuniqueData] = useState([]);
  const [inputlist, setinputlist] = useState([]);


  const listItem = async () => {
    try {
      await fetch(
        "https://alliance-e9c2c-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ inputlist, userEmail, unique_id }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      setinputlist("");
    } catch {
      // setError("Failed to create an account");
    }
  };
 

  useEffect(() => {
    const fetchData = async () => {
      {
        const response = await fetch(
          "https://alliance-e9c2c-default-rtdb.firebaseio.com/tasks.json"
        );
        const data = await response.json();
        const getFormData = [];
        for (const key in data) {
          getFormData.push({
            task: data[key]?.inputlist,
            user: data[key]?.user,
            unique_id: data[key]?.unique_id,
          });
        }
        console.log(getFormData ,"getformdata")
        const uniqueuserData = getFormData.filter(user => user.user == userEmail)
        setuniqueData(uniqueuserData)
        console.log(uniqueData, "unique11111")
        setTask(uniqueData)
      }
      
    };
    fetchData();
    console.log(userEmail,"user")
  },[task] );
  

  const deleteItem = (id) => {
    console.log("delelte");
     {
      const data= task.filter(user => user.unique_id !== id)
      setTask(data)
      console.log(data, "data11111")
    }
    
  };

  return (
    <div className="task">
      <main className={show ? "space-toggle" : null}>
        <header className={`header ${show ? "space-toggle" : null}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <i className={`fas fa-bars ${show ? "" : null}`}></i>
          </div>
          <div className="pt-3">
            <p>Profile</p>
          </div>
        </header>

        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div>
              <div className="nav-list">
                <Link to="/dashboard" className="nav-link  dashboard-nav">
                  <i className="fas fa-tachometer-alt nav-link-icon"></i>
                  <span className="nav-link-name">Dashboard</span>
                </Link>
                <Link to="/todo" className="nav-link active dashboard-nav">
                  <i className="fas fa-tasks nav-link-icon "></i>
                  <span className="nav-link-name">Task</span>
                </Link>
                <Link to="/calendar" className="nav-link dashboard-nav">
                  <i className="fas fa-calendar nav-link-icon"></i>
                  <span className="nav-link-name">Calendar</span>
                </Link>
              </div>
            </div>

            {/* <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link> */}
          </nav>
        </aside>

        <div className="main_div">
          <div className="centre_div">
            <br />
            <h1>Tasks List</h1>
            <br />
            <input
              type="text"
              placeholder="Enter your work"
              value={inputlist.name}
              onChange={(e) => {
                setinputlist(e.target.value);
              }}
            />
            <button onClick={listItem} className="btn btn-primary add-btn">
              +
            </button>{" "}
            {task.map((item, index) => {
              return (
                <div key={index} className="todo_style">
                  <ol>
                    <li>
                      <span
                        className="items"
                        style={{ margin: "10px 50px 0 0px" }}
                      >
                        {item.task}
                      </span>

                      <span
                        className="deleteIcon"
                        onClick={() => {
                          deleteItem(item.unique_id);
                        }}
                      >
                        {" "}
                        <MdDelete
                          style={{
                            fontSize: "20px",
                            color: "#fc1c03",
                            cursor: "pointer",
                          }}
                        />{" "}
                      </span>
                    </li>
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Todos;
