import React, { useEffect, useState } from "react";
import { Metadata } from "../layout/MetaData";

function ContactUs() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [reference, setReference] = useState("");

  const submithandler = (event) => {};

  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Metadata title={"Contact"} />
      <div id="contact" className="contact">
        <div className="container">
          <div className="contactdiv">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title"></div>
                <h1>
                  We are always open to help you with your questions about our
                  services. <br /> Write to us here!
                </h1>

                <p>
                  {" "}
                  Can't find what you are looking for? Call us or send us an
                  email. <br /> We will get back to you as soon as possible.
                  Thanks!!
                </p>
                <h2>+91 9883019518 | care@arnxt.com</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form>
                <div className="form-group">
                  <input
                    value={firstname}
                    type="text"
                    className="form-control-input"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    value={lastname}
                    type="text"
                    className="form-control-input"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    value={companyname}
                    type="text"
                    className="form-control-input"
                    placeholder="Company Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    className="form-control-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    value={number}
                    className="form-control-input"
                    placeholder="Contact Number"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={query}
                    className="form-control-input"
                    placeholder="Type Your Queries Here"
                    required
                  />
                </div>
                <div className="form-group">
                   <select>
                     <option>Social media</option>
                     <option>Friends</option>
                     <option>Ads</option>
                     <option>Startup community</option>
                    

                   </select>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control-submit-button"
                    onSubmit={submithandler}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
