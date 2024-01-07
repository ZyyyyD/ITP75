import { Link } from "react-router-dom";
import logo from "../../asset/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const users = [
    { username: "cueno@gmail.com", password: "password" },
    { username: "maceda@gmail.com", password: "pass123" },
    // Dagdag boi
  ];

  const navigate = useNavigate();
  
  const handleLogin = () => {
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );
  
    if (matchedUser) {
      setLoggedIn(true);
      navigate("/dashboard");
    } else if (password) {
      setErrorMessage("Wrong password. Please try again.");
    } else if (username) {
      setErrorMessage("Wrong email. Please try again.");
    }
  };
  
  return (
    <>
      <section className="vh-100 gradient-custom" data-testid="login-component">
        <div className="container h-20">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <div className=" m-3">
                    <img src={logo} alt="" style={{ width: 150 }} />
                    <h3 className="fw-bold pb-3 text-uppercase">
                      User Management System
                    </h3>

                    <div className="form-outline text-start form-white mb-4">
                      <label className="form-label " htmlFor="typeEmailX">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="form-outline text-start  form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      
                      />
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                      <p className="small text-end p-2">
                        <a
                          className="text-white-50  "
                          href="#!"
                          style={{ textDecoration: "none" ,}}>
                          Forgot password?
                        </a>
                      </p>
                    </div>                  
                    <button className="d-block btn btn-outline-light btn-lg " style={{margin:"auto"}} onClick={handleLogin}>Login</button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  }

export default Login;
