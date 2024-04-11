import React, { useEffect, useState } from "react";

import Alert from "../components/Alert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Analyticslogin = () => {
  return (
    <div className="loginparent">
      <div className="loginouterdiv">
        <div className="form-container">
          <h2>Login</h2>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, id, name, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`input-field ${focused || value ? "focused" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />
    </div>
  );
};

const LoginForm = () => {
  const loginUrl =
    "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/loginvisualiserclient";

  const [res, setRes] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (res === 200) {
      showAlert("Login successfull!", "success");
      setTimeout(() => {
        history.push("/analytics");
      }, 2000);
    }
  }, [history, res]);

  const [loginarray, setLoginArray] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginArray((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleloginsubmit = (e) => {
    e.preventDefault();
    if (loginarray.email === "") {
      showAlert("Please provide an email", "error");
      return;
    } else if (loginarray.password === "") {
      showAlert("please provide the password", "error");
      return;
    } else {
      const requestBody = {
        email: loginarray.email,
        password: loginarray.password,
      };

      axios
        .post(loginUrl, requestBody)
        .then((response) => {
          setRes(response.status);
          sessionStorage.setItem("client", response.data.user);
        })
        .catch((error) => {
          showAlert(error.response.data, "error");
        });
    }
  };

  return (
    <div>
      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
      )}
      <form className="registermainform">
        <InputField
          label="UserId"
          type="email"
          id="email"
          name="email"
          value={loginarray.email}
          onChange={handleInputChange}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={loginarray.password}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleloginsubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Analyticslogin;
