import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { colors } from "@mui/material";

const SettingsCard = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPasswords({ ...passwords, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic password validation
    const { newPassword, confirmPassword } = passwords;
    const errors = {};
    if (newPassword.length < 6) {
      errors.newPassword = "Password should be at least 6 characters";
    }
    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    // Set errors or submit the form
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit logic here
      console.log("Form submitted:", passwords);
      // Reset form fields after successful submission if needed
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  const handleDelete = () => {
    // Clear fields when Delete button is clicked
    setPasswords({
<<<<<<< HEAD
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
=======
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
    });
    setErrors({});
  };

  return (
    <div className="container mt-5 align-items-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
<<<<<<< HEAD
              <h3 className="card-title" style={{color: "black"}}>Change Password</h3>
=======
              <h3 className="card-title" style={{ color: "black" }}>
                Change Password
              </h3>
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <label className="form-label" htmlFor="currentPassword">
                      Current Admin Password:
                    </label>
                    <input
<<<<<<< HEAD
                    required
=======
                      required
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
                      type="password"
                      id="currentPassword"
                      className="form-control form-control-lg"
                      value={passwords.currentPassword}
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    <label className="form-label" htmlFor="newPassword">
                      New Admin Password:
                    </label>
                    <input
<<<<<<< HEAD
                    required
=======
                      required
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
                      type="password"
                      id="newPassword"
                      className="form-control form-control-lg"
                      value={passwords.newPassword}
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    <label className="form-label" htmlFor="confirmPassword">
                      Confirm Admin Password:
                    </label>
                    <input
<<<<<<< HEAD
                    required
=======
                      required
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
                      type="password"
                      id="confirmPassword"
                      className="form-control form-control-lg"
                      value={passwords.confirmPassword}
                      onChange={handleChange}
                    />
                    <label className="text-danger">{errors.newPassword}</label>
<<<<<<< HEAD
                    <label className="text-danger">{errors.confirmPassword}</label>
=======
                    <label className="text-danger">
                      {errors.confirmPassword}
                    </label>
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
                  </li>
                </ul>

                <div className="row mt-3">
<<<<<<< HEAD
              
                <div className="d-flex flex-column">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-2">
                    SAVE
                  </button>
                  <button type="button" className="btn btn-primary btn-block"
                  onClick={handleDelete}>
                    DELETE
                  </button>
                </div>
                {/* <div style={{ color: 'red' }}>{errors}</div> */}
=======
                  <div className="d-flex flex-column">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-2">
                      SAVE
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={handleDelete}>
                      DELETE
                    </button>
                  </div>
                  {/* <div style={{ color: 'red' }}>{errors}</div> */}
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
                </div>
              </form>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>
    </div>
  );
};


    <>
      <div className="content-wrapper">
        <h2>Change Password</h2>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
=======
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9
        </div>
      </div>
<<<<<<< HEAD
    </>


=======
    </div>
  );
};
>>>>>>> fd0fe8dc8f80ea6118f710800b2bca66447f86a9

export default SettingsCard;
