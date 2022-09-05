import React, { useState } from "react";
import "./Auth.scss";
import auth from "../../assets/img/auth.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !values.name ||
      !values.email ||
      !values.password ||
      !values.cpassword
    ) {
      return setError("Please fill all Fields");
    }

    if (values.password !== values.cpassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      setError("");
      await fetch(
        "https://alliance-e9c2c-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      alert("User added Succusfully!");
      navigate("/signin");
      console.log(values);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <div className="signIn">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-lg-6 pt-4">
            <div className="row">
              <div className="offset-md-2 col-12 col-md-8">
                <div className="">
                  <span className="not-a-member">Already have a account?</span>{" "}
                  <Link to="/signin" className="forgotPassword">
                    Sign In
                  </Link>
                </div>
                <div className="mt-3 auth-title ">
                  {" "}
                  Welcome to <span className="signup-title">Alliance</span>{" "}
                </div>
                <div className="signup-contant">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco...
                </div>
                <form onSubmit={handleSubmit} className="mt-3">
                  {/* {errorMsg ? <div class="alert alert-danger" role="alert">
                {errorMsg}
               </div>: ""}
               {cpError ? <div class="alert alert-danger" role="alert">
                {cpError}
               </div>:""} */}
                  {error ? (
                    <div class="alert alert-danger" role="alert">
                      {error}
                    </div>
                  ) : (
                    ""
                  )}

                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Full Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      name="name"
                      value={values.name}
                      onChange={(e) => {
                        setValues({ ...values, name: e.target.value });
                      }}
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label=" Full Name"
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-email">
                      Email Address
                    </InputLabel>
                    <OutlinedInput
                      type="email"
                      id="outlined-adornment-email"
                      value={values.email}
                      name="email"
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                      }}
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label=" Email Address"
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      type={values.showPassword ? "text" : "password"}
                      id="outlined-adornment-password"
                      name="password"
                      placeholder="password must greater then 6"
                      value={values.password}
                      onChange={(e) => {
                        setValues({ ...values, password: e.target.value });
                      }}
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="password"
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      name="cpassword"
                      type={values.showPassword ? "text" : "password"}
                      id="outlined-adornment-password"
                      value={values.cpassword}
                      onChange={(e) => {
                        setValues({ ...values, cpassword: e.target.value });
                      }}
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="Confirm Password"
                    />
                  </FormControl>

                  <div className="text-end forgotPassword">
                    Forgot password ?
                  </div>

                  <Button
                    className="submit-btn"
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    // onClick={handlerSubmit}
                    sx={{
                      marginTop: "20px",
                      height: "50px",
                      textTransform: "capitalize",
                      background: "#20b9e8",
                    }}
                  >
                    Create an account
                  </Button>
                </form>
                <div
                  style={{
                    width: "100%",
                    height: "14px",
                    borderBottom: "1px solid #938c8c",
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#938c8c",
                      backgroundColor: "white",
                      padding: "0px  10px",
                      marginTop: "10px",
                    }}
                  >
                    Or Sign in with
                  </span>
                </div>
                <div className="d-flex justify-content-between align-item-center mt-3">
                  <div className="social-icon  border-2 text-center">
                    <img src={google} width="20%" />
                  </div>
                  <div className="social-icon text-center">
                    <img src={facebook} width="20%" />
                  </div>
                </div>
                <div className="text-end mt-4"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src={auth} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
