import React from "react"
import { Route, Redirect, Navigate, Outlet, Routes } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Routes>
    <Route
      {...rest}
      render={props => {
       
        return currentUser ? <Outlet /> : <Navigate to="/login" />
      }}
    ></Route>
    </Routes>
  )
}
