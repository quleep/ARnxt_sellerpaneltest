import React, { useState, useEffect, useRef } from "react";
import Image from "../careerimages/Rectangle.svg";
import Location from "../careerimages/location.svg";
import JobType from "../careerimages/jobType.svg";
import DatePosted from "../careerimages/datePosted.svg";
import Experience from "../careerimages/experience.svg";
import Vacancy from "../careerimages/vacancy.svg";
import Instagram from "../careerimages/Instagram.svg";
import Facebook from "../careerimages/Facebook.svg";
import Twitter from "../careerimages/Twiter.svg";
import Linkedin from "../careerimages/Linkedin.svg";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Id from "../careerimages/id.svg";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const JobDetails = ({ filteredApplicants, showSnackbar }) => {
  console.log(filteredApplicants);
  // Use the filteredApplicants prop here
  const [modal, setModal] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [deadline, setDeadline] = useState("");

  const history = useHistory();

  const openModal = () => {
    setModal(!modal);
    console.log("first");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const nextPage = () => {
    history.push("/career");
  };
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer.php?u=${window.location.href}`
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/share?url=${window.location.href}&text=Job Posting:`
    );
  };

  const shareOnLinkedin = () => {
    const articleUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("LinkedIn Developer Network");
    const summary = encodeURIComponent("My favorite developer program");
    const source = encodeURIComponent("LinkedIn");

    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}&title=${title}&summary=${summary}&source=${source}`
    );
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/?url=${window.location.href}`);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [resume, setResume] = useState(null);
  const [resumetext, setResumetext] = useState(null);

  const [contactError, setContactError] = useState("");
  const [base64, setBase64] = useState("");
  const [textPosted, setTextPosted] = useState("");

  const now = new Date();
  const appliedDate = now.getTime();
  console.log(appliedDate);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10) {
      setContact(value);
      setContactError("");
    } else {
      setContactError("* Contact number should be 10 or less than 10");
    }
  };

  const handleResumeChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.name.endsWith(".pdf")) {
      setResume(selectedFile);
      setResumetext(selectedFile.name);
    } else {
      setTextPosted("Choose .pdf file only");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const file = resume;
      const reader = new FileReader();

      const uploadFile = new Promise((resolve, reject) => {
        reader.onload = () => {
          const base64 = reader.result;
          const formData = new FormData();
          formData.append(resumetext, base64);

          resolve(formData);
        };
        reader.onerror = reject;

        reader.readAsDataURL(file);
      });

      const formData = await uploadFile;

      const uploadResponse = await axios.post(
        "https://gsrhol3xd0.execute-api.ap-south-1.amazonaws.com/prod/file-upload",
        formData
      );

      const uploadedFileUrl = uploadResponse.data.fileUrl;
      const newApplicant = {
        Id: uuidv4(),
        name: name,
        emailid: email,
        contactNumber: contact,
        resumeUrl: uploadedFileUrl,
        applied_date: appliedDate,
        job_id: filteredApplicants.job_id,
      };

      const applicantResponse = await axios.post(
        "https://gsrhol3xd0.execute-api.ap-south-1.amazonaws.com/prod/applicant",
        newApplicant
      );
      setShowToast(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const myInputRef = useRef(null);

  useEffect(() => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setDeadline(filteredApplicants?.deadline);
    const timestamp = filteredApplicants?.deadline; // replace with your timestamp
    const now = Date.now() / 1000; // get current timestamp in seconds
    const isLessThanToday = timestamp < now;
    if (isLessThanToday) {
      console.log("This timestamp is less than today's timestamp.");
      console.log(timestamp);
      setdisabled(true);
    } else {
      console.log(
        "This timestamp is greater than or equal to today's timestamp."
      );
    }
  }, [filteredApplicants]);
  const [alertVisible, setAlertVisible] = useState(true);

  const closeAlert = () => {
    setAlertVisible(false);
  };
  return (
    <div className="jobdetail">
      <div className="jobdetail-main">
        <div className="image">
          <img src={Image} alt="Your SVG" className="image-svg"></img>
        </div>
        <div className="row-detail">
          <div className="job-column-desc">
            <div className="headline">{filteredApplicants?.role}</div>
            <div className="headline-small">Who Are We Looking For</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants?.what_we_are_looking_for
                  .split("*")
                  .map((item) => (
                    <p key={item}>
                      <span className="bullet-icon">&bull;</span> {item.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="headline-small">What You Will Be Doing</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants?.what_you_will_be_doing
                  .split("*")
                  .map((item) => (
                    <p key={item}>
                      <span className="bullet-icon">&bull;</span> {item.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="headline-small">
              Bonus Points for Familiarity with
            </div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants?.bonus_point.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Educational Requirement</div>
            <div className="description-small">
              {filteredApplicants?.education_requirement
                .split("*")
                .map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
            </div>
            <div className="headline-small">Salary</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants?.salary.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Perks & Benefits You’ll Get </div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants?.perks_benefits.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="side-apply">
            <div className="apply-detail">
              <button
                variant="primary"
                className="apply-button"
                onClick={handleShow}
                disabled={disabled}>
                Apply Now
              </button>

              <div className="job-summary">
                <div className="job-summarytext">Job Summary</div>

                <div className="job-row">
                  <div className="vector-location">
                    <img src={Id} alt="Your SVG" className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Job Id</div>
                    <div className="location-text">
                      {filteredApplicants?.job_id}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Location}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Location</div>
                    <div className="location-text">
                      {filteredApplicants?.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={JobType}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Job Type</div>
                    <div className="location-text">
                      {filteredApplicants?.job_type}
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={DatePosted}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Date posted</div>
                    <div className="location-text">
                      {filteredApplicants?.job_post_date &&
                        new Date(
                          filteredApplicants.job_post_date * 1000
                        ).toLocaleDateString("en-GB")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Experience}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Experience</div>
                    <div className="location-text">
                      {filteredApplicants?.experience}
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Vacancy}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Vacancy</div>
                    <div className="location-text">
                      {filteredApplicants?.number_of_vacancy}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="viewall" onClick={nextPage}>
                  View All Jobs
                </div>
              </div>
            </div>
            <div className="share-this">Share this:</div>
            <div className="share-row">
              <img
                src={Facebook}
                alt="Facebook"
                className="social-svg"
                onClick={shareOnFacebook}></img>
              <img
                src={Twitter}
                alt="Twitter"
                className="social-svg"
                onClick={shareOnTwitter}></img>
              <img
                src={Linkedin}
                alt="Linkedin"
                className="social-svg"
                onClick={shareOnLinkedin}></img>
              <img
                src={Instagram}
                alt="Instagram"
                className="social-svg"
                onClick={shareOnInstagram}></img>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-padding">
            <form
              className="card-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}>
              <div className="name">Name</div>
              <input
                type="text"
                className="name-input"
                required
                onChange={handleNameChange}
              />
              <div className="name">Email ID</div>
              <input
                type="email"
                className="name-input"
                required
                onChange={handleEmailChange}
              />
              <div className="name">Contact Number:</div>
              <input
                type="tel"
                className="name-input"
                required
                pattern="[0-9]{10}"
                onChange={handleContactChange}
              />

              {contactError && <div className="error">{contactError}</div>}
              <div className="name">Upload Resume/CV:</div>
              <input
                type="file"
                name="resume"
                className="name-input"
                accept=".pdf"
                required
                onChange={handleResumeChange}
              />
              {isLoading && <div className="loader"></div>}
              <button
                className="action-button"
                type="submit"
                disabled={isLoading}>
                {isLoading ? "Uploading..." : "Upload"}
              </button>
            </form>

            <Toast
              onClose={() => setShowToast(false)}
              bg="success"
              show={showToast}
              delay={3000}
              autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Success</strong>
              </Toast.Header>
              <Toast.Body className={"text-white"}>
                Successfully Uploaded!
              </Toast.Body>
            </Toast>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobDetails;
