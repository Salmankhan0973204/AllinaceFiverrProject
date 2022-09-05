import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../layout/header/Header";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate()
  const loginNavigation = () =>{
    navigate("/signin")
  }
  return (
    <div className="home">
      <Header />
      <div className="home-body container-fluid mt-5">
        <div className="row">
          <div className=" col-lg-6">
            <div className="home-body-contant mx-lg-5">
              <div className=" lg-px-5">
                <p className="home-body-contant-title">
                  Task Management & To-Do List
                </p>
                <p className="home-body-contant-body px-lg-2 pt-4">
                  This productive tool is designed to help you better manage
                  your task project-wise conveniently!
                </p>
                <button className="home-body-contant-button mt-5" onClick={loginNavigation}>
                  Let's Start ->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
