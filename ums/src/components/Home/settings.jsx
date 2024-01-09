import React, { useState } from "react";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    // Perform password change logic here
    if (currentPassword && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        // Implement your password change logic here
        // For simplicity, let's just log the changes
        console.log("Password changed successfully!");
        setMessage("Password changed successfully!");
      } else {
        setMessage("New password and confirm password do not match.");
      }
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  const handleDelete = () => {
    // Clear fields when Delete button is clicked
    setPasswords({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  return (
    <div className="container mt-5 align-items-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title" style={{color: "black"}}>Change Password</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <label className="form-label" htmlFor="currentPassword">
                      Current Admin Password:
                    </label>
                    <input
                    required
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
                    required
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
                    required
                      type="password"
                      id="confirmPassword"
                      className="form-control form-control-lg"
                      value={passwords.confirmPassword}
                      onChange={handleChange}
                    />
                    <label className="text-danger">{errors.newPassword}</label>
                    <label className="text-danger">{errors.confirmPassword}</label>
                  </li>
                </ul>

                <div className="row mt-3">
              
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
                </div>
              </form>
            </div>
          </div>
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
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleChangePassword}>Change Password</button>
        <p>{message}</p>
      </div>
    </>



export default Settings;
