import React, { Component, useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/register.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import { useHistory } from "react-router-dom";
// import e from "cors";
// import { data } from "jquery";

// regex imports
import {
  validAccountHolderName,
  validAccountNumber,
  validEmail,
  validGstin,
  validIfsc,
} from "./Regex";

// register functional component

function Merchant_Register() {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ----------states declaration start -------------
  const [registerStep, setStep] = useState(1);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [subscribed, setSubscribed] = useState(null);
  const [toLogIn, setToLogin] = useState(false);

  // ---------- first step states --------------
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorOtp, setErrorOtp] = useState("");
  const [serverOtp, setServerOtp] = useState(null);
  const [numberVerified, setNumberVerified] = useState(false);

  // second step states
  const [gstin, setGstin] = useState("");
  const [errorGstin, setErrorGstin] = useState("");

  // third step
  const [accountHolderName, setAccountHolderName] = useState("");
  const [errorAccountHolderName, setErrorAccountHolderName] = useState("");
  const [branch, setBranch] = useState("");
  const [errorBranch, setErrorBranch] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [errorIfsc, setErrorIfsc] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [errorAccountNumber, setErrorAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [errorAccountType, setErrorAccountType] = useState("");

  // fourth step states
  const [errorCompanyName, setErrorCompanyName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errorCompanyUrl, setErrorCompanyUrl] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [errorCompanyType, setErrorCompanyType] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [errorName, setErrorName] = useState("");
  const [name, setName] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [address, setAddress] = useState("");

  // ------ handler function -----------

  // first step functions
  const sendOtp = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/merchant/sendotp`, { phone: phone })
      .then((res) => setServerOtp(res.data.otp))
      .catch((err) => console.log(err));
  };
  const verifyotp = (e) => {
    e.preventDefault();
    if (otp === serverOtp) {
      setNumberVerified(true);
      setErrorPhone("");
    } else {
      setErrorOtp("wrong otp!");
    }
  };
  const validEmailCheck = () => {
    axios
      .get(`${url}/merchant/emailcheck/${email}`)
      .then((resp) => {
        setErrorEmail(resp.data.errorEmail);
      })
      .catch((err) => console.log(err));
  };

  const firstStepSubmit = (e) => {
    e.preventDefault();

    if (numberVerified) {
      if (email.length === 0) {
        setErrorEmail("Enter email");
      } else if (!validEmail.test(email)) {
        setErrorEmail("Enter a valid email!");
      } else if (password.length === 0) {
        setErrorPassword("Enter password");
      } else if (password.length < 6) {
        setErrorPassword("Password must have more than 6 characters");
      } else if (password.length > 10) {
        setErrorPassword("Password must have less than 10 characters");
      } else if (errorEmail === "" && errorPassword === "") {
        setStep(2);
      }
    } else {
      if (phone.length === 0) {
        setErrorPhone("Enter phone number");
      } else if (phone.length !== 10) {
        setErrorPhone("Enter a valid mobile number!");
      } else {
        setErrorPhone("Mobile number not verified!");
      }
    }
  };

  // second step functions
  const submitGstin = (e) => {
    e.preventDefault();
    if (gstin.length === 0) {
      setStep(3);
    } else if (!validGstin.test(gstin)) {
      setErrorGstin("Enter a valid GSTIN!");
    }
    // else {
    //   setStep(3);
    // }
  };

  // third step functions
  const submitBankDetails = (e) => {
    e.preventDefault();
    if (accountHolderName.length === 0) {
      setStep(4);
    } else if (!validAccountHolderName.test(accountHolderName)) {
      setErrorAccountHolderName("Enter Valid Name");
    } else if (accountNumber.length === 0) {
      setStep(4);
    } else if (!validAccountNumber.test(accountNumber)) {
      setErrorAccountNumber("Enter Valid Account Number");
    } else if (branch.length === 0) {
      setStep(4);
    } else if (ifsc.length === 0) {
      setStep(4);
    } else if (!validIfsc.test(ifsc)) {
      setErrorIfsc("Enter Valid IFSC");
    } else if (accountType.length === 0) {
      setStep(4);
    } else if (
      errorAccountHolderName === "" &&
      errorAccountNumber === "" &&
      errorAccountType === "" &&
      errorBranch === "" &&
      errorIfsc === ""
    ) {
      setStep(4);
    }
  };

  // fourth step functions
  const createAccount = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setErrorName("Enter Name");
    } else if (!validAccountHolderName) {
      setErrorAccountHolderName("Enter Valid Name");
    } else if (companyName.length === 0) {
      setErrorCompanyName("Enter Company Name");
    } else if (companyType.length === 0) {
      setErrorCompanyType("Enter Company Type");
    } else if (address.length === 0) {
      setErrorAddress("Enter Address");
    } else if (
      errorName === "" &&
      errorCompanyType === "" &&
      errorCompanyName === "" &&
      errorAddress === "" &&
      errorCompanyUrl === ""
    ) {
      let params = {
        name,
        phone,
        email,
        password,
        gstin,
        address,
        companyName,
        companyUrl,
        companyType,
        accountHolderName,
        accountNumber,
        accountType,
        branch,
        ifsc,
      };
      axios
        .post(`${url}/merchant/register`, params)
        .then((resp) => {
          if (resp.data.status) {
            sessionStorage.setItem("registered", resp.data.status);
            setToLogin(false);
            setStep(5);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const goBack = () => {
    history.push(setStep(2));
  };

  // lifecycle effects
  useEffect(() => {
    if (sessionStorage.getItem("phone") !== "undefined") {
      setPhone(sessionStorage.getItem("phone"));
      sessionStorage.removeItem("phone");
    } else {
      setPhone("");
    }
    if (typeof sessionStorage.getItem("token") === "string") {
      const token = sessionStorage.getItem("token");
      axios
        .get(`${url}/merchant/profile/${token}`)
        .then((resp) => {
          if (resp.data.user) {
            setUser(true);
          } else {
            if (resp.data.admin) {
              setAdmin(true);
            } else {
              if (!resp.data.uploadLimit) {
                setUser(false);
              } else {
                setUser(false);
                setSubscribed(true);
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // return () => {
    //     cleanup
    // }
  }, []);

  // ------------------ UI SECTION ----------------------

  if (typeof sessionStorage.getItem("token") === "string" && user === true) {
    return <Redirect to="/welcome_user" />;
  } else if (
    typeof sessionStorage.getItem("token") === "string" &&
    admin === true
  ) {
    return <Redirect to="/welcome_admin" />;
  } else if (
    typeof sessionStorage.getItem("token") === "string" &&
    user === false &&
    subscribed === null
  ) {
    return <Redirect to="/plans" />;
  } else if (
    typeof sessionStorage.getItem("token") === "string" &&
    user === false &&
    subscribed === true
  ) {
    return <Redirect to="/models" />;
  } else if (
    typeof sessionStorage.getItem("token") === "string" &&
    user === null &&
    admin === false
  ) {
    return (
      <div className="loader__modal">
        <Loader type="Circles" color="whitesmoke" height={40} width={40} />
      </div>
    );
  } else if (toLogIn) {
    setToLogin(false);
    return <Redirect to="/merchant_login" />;
  }

  // ---------- first step ----------------
  else if (registerStep === 1) {
    return (
      <div className="register__container">
        <div className="regFormDiv">
          <h2 className="regFormHeading">Merchant Register</h2>
          <h2
            style={{ color: "red", fontSize: "17px" }}
            className="regFormHeading">
            {" "}
            * indicates required field
          </h2>
          <form className="regForm" onSubmit={(e) => firstStepSubmit(e)}>
            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Enter Mobile"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setNumberVerified(false);
                    setErrorPhone("");
                  }}
                />
              </div>
            </div>
            {errorPhone.length > 0 && (
              <div className="regError">{errorPhone}</div>
            )}
            {!numberVerified ? (
              <button className="regSubmitBtn" onClick={(e) => sendOtp(e)}>
                Send Otp
              </button>
            ) : null}

            {!numberVerified ? (
              <div className="d-flex">
                <div className="asterisk">*</div>
                <div className="regInputDiv">
                  <input
                    type="text"
                    className="regInput"
                    placeholder="Enter Otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => {
                      setErrorOtp("");
                      setOtp(e.target.value);
                    }}
                  />
                </div>

                {errorOtp.length > 0 && (
                  <div className="regError">{errorOtp}</div>
                )}
                <button className="regSubmitBtn" onClick={(e) => verifyotp(e)}>
                  Verify
                </button>
              </div>
            ) : (
              <div className="regSuccess">Verified!</div>
            )}

            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onBlur={() => validEmailCheck()}
                  onChange={(e) => {
                    setErrorEmail("");
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            {errorEmail.length > 0 && (
              <div className="regError">{errorEmail}</div>
            )}

            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <input
                  type="password"
                  className="regInput"
                  placeholder="Set Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorPassword("");
                  }}
                />
              </div>
            </div>
            {errorPassword.length > 0 && (
              <div className="regError">{errorPassword} </div>
            )}

            <button className="regSubmitBtn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
  // ----------- second step ----------------
  else if (registerStep === 2) {
    return (
      <div className="container register__container">
        <div className="regFormDiv">
          <h2 className="regFormHeading">BUSINESS DETAILS(OPTIONAL)</h2>
          <form
            className="regForm"
            onSubmit={(e) => {
              submitGstin(e);
            }}>
            <div className="d-flex">
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Enter GSTIN"
                  value={gstin}
                  onChange={(e) => {
                    setErrorGstin("");
                    setGstin(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorGstin.length > 0 && (
              <div className="regError">{errorGstin}</div>
            )}

            <button className="regSubmitBtn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ------------ third step --------------
  else if (registerStep === 3) {
    return (
      <div className="container register__container">
        <div className="regFormDiv">
          <h2 className="regFormHeading">BANK DETAILS(OPTIONAL)</h2>
          <form className="regForm" onSubmit={(e) => submitBankDetails(e)}>
            <div className="d-flex">
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Account Holder Name"
                  value={accountHolderName}
                  onChange={(e) => {
                    setErrorAccountHolderName("");
                    setAccountHolderName(e.target.value);
                  }}
                />
              </div>
            </div>

            {errorAccountHolderName.length > 0 && (
              <div className="regError">{errorAccountHolderName}</div>
            )}

            <div className="d-flex">
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={(e) => {
                    setErrorAccountNumber("");
                    setAccountNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorAccountNumber.length > 0 && (
              <div className="regError">{errorAccountNumber}</div>
            )}

            <div className="d-flex">
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  value={branch}
                  placeholder="Branch"
                  onChange={(e) => {
                    setErrorBranch("");
                    setBranch(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorBranch.length > 0 && (
              <div className="regError">{errorBranch}</div>
            )}

            <div className="d-flex">
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  value={ifsc}
                  placeholder="IFSC Code"
                  onChange={(e) => {
                    setErrorIfsc("");
                    setIfsc(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorIfsc.length > 0 && (
              <div className="regError">{errorIfsc}</div>
            )}

            <div className="d-flex">
              <div className="regInputDiv">
                <div class="input-group">
                  <select
                    class="custom-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    value={accountType}
                    onChange={(e) => {
                      setErrorAccountType("");
                      setAccountType(e.target.value);
                    }}>
                    <option
                      selected
                      disabled={accountType === "" ? false : true}>
                      Account Type...
                    </option>
                    <option value="Savings">Savings</option>
                    <option value="Current">Current</option>
                  </select>
                </div>
              </div>
            </div>
            {errorAccountType.length > 0 && (
              <div className="regError">{errorAccountType}</div>
            )}

            <button className="regSubmitBtn" type="submit">
              Next
            </button>
            <button className="regSubmitBtn" type="submit" onClick={goBack}>
              Back
            </button>
          </form>
        </div>
      </div>
    );
  }

  // -------------- fourth step -------------
  else if (registerStep === 4) {
    return (
      <div className="container register__container">
        <div className="regFormDiv">
          <h2 className="regFormHeading">MERCHANT DETAILS</h2>
          <h2
            style={{ color: "red", fontSize: "17px" }}
            className="regFormHeading">
            {" "}
            * indicates required field
          </h2>
          <form className="regForm" onSubmit={(e) => createAccount(e)}>
            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setErrorName("");
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            {errorName.length > 0 && (
              <div className="regError">{errorName}</div>
            )}

            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => {
                    setErrorName("");
                    setName(e.target.value);
                  }}
                  className="regInput"
                  placeholder="Company Name"
                  onChange={(e) => {
                    setErrorCompanyName("");
                    setCompanyName(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorCompanyName.length > 0 && (
              <div className="regError">{errorCompanyName}</div>
            )}

            <div className="d-flex">
              <div className="regInputDiv">
                <input
                  type="text"
                  value={companyUrl}
                  className="regInput"
                  placeholder="Company URL(optional)"
                  onChange={(e) => {
                    setErrorCompanyUrl("");
                    setCompanyUrl(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorCompanyUrl.length > 0 && (
              <div className="regError">{errorCompanyUrl}</div>
            )}

            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <div class="input-group">
                  <select
                    class="custom-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    value={companyType}
                    onChange={(e) => {
                      setErrorCompanyType("");
                      setCompanyType(e.target.value);
                    }}>
                    <option
                      selected
                      disabled={companyType === "" ? false : true}>
                      Company Type...
                    </option>
                    <option value="Limited">Limited</option>
                    <option value="Private Limited">Private Limited</option>
                    <option value="Society/Trust">Society/Trust</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Proprietership">Proprietership</option>
                  </select>
                </div>
              </div>
            </div>
            {errorCompanyType.length > 0 && (
              <div className="regError">{errorCompanyType}</div>
            )}

            <div className="d-flex">
              <div className="asterisk">*</div>
              <div className="regInputDiv">
                <input
                  type="text"
                  className="regInput"
                  placeholder="Company Address"
                  value={address}
                  onChange={(e) => {
                    setErrorAddress("");
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
            {errorAddress.length > 0 && (
              <div className="regError">{errorAddress}</div>
            )}

            <button className="regSubmitBtn" type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/merchant_login" />;
  }
}

export default Merchant_Register;
