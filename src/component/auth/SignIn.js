import React, { useState } from "react";
import "./Auth.scss";
import auth from "../../assets/img/auth.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const User = userData.find((user) => user.email === values.email);
      console.log(User, "dddd");

      if (User) {
        localStorage.setItem("useremail", User.email);
        navigate("/dashboard");
      }
      if (!User) {
        return setError("Invalid User");
      }
      if (!values.password || !values.email) {
        return setError("Please fill all Fields");
      }
    } catch {
      setError("Failed to create an account");
    }
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const fetchData = async () => {
      { const response = await fetch(
          "https://alliance-e9c2c-default-rtdb.firebaseio.com/users.json"
        );
        const data = await response.json();
        const getFormData = [];
        for (const key in data) {
          getFormData.push({
            email: data[key]?.email,
            password: data[key]?.password,
          });
         
        }
        setUserData(getFormData);
      }
    }
    fetchData() 
    }, [userData]);

  return (
    <div className="signIn">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-lg-6 pt-4">
            <div className="row">
              <div className="offset-md-2 col-12 col-md-8">
                <Link to="/" className="logo">
                  Alliance.
                </Link>
                <div className="mt-3 auth-title ps-1"> Welcome back!</div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-3">
                    {error ? (
                      <div class="alert alert-danger" role="alert">
                        {error}
                      </div>
                    ) : (
                      ""
                    )}

                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Email Address
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.email}
                        onChange={(e) => {
                          setValues({ ...values, email: e.target.value });
                        }}
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label=" Email Address"
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      sx={{ m: 1, marginTop: "30px" }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={(e) => {
                          setValues({ ...values, password: e.target.value });
                        }}
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    <div className="text-end forgotPassword">
                      Forgot password ?
                    </div>
                  </div>
                  <Button
                    className="submit-btn"
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{
                      marginTop: "20px",
                      height: "50px",
                      textTransform: "capitalize",
                      background: "#20b9e8",
                    }}
                  >
                    Continue
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
                <div className="text-end mt-4">
                  <span className="not-a-member">Not a member?</span>
                  <Link to="/signup" className="forgotPassword">
                    Create a account
                  </Link>
                </div>
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

export default SignIn;
