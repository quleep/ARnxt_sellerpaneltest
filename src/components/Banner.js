import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ReactModal from "react-modal";

const Banner = ({ filteredApplicants, showSnackbar }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [resume, setResume] = useState(null);
  const [resumetext, setResumetext] = useState(null);

  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [base64, setBase64] = useState("");
  const [textPosted, setTextPosted] = useState("");
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [disabled, setdisabled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const now = new Date();
  const appliedDate = now.getTime();

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
  const myInputRef = useRef(null);

  useEffect(() => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  }, []);

  const [alertVisible, setAlertVisible] = useState(true);

  const closeAlert = () => {
    setAlertVisible(false);
  };
  return (
    <>
      <div className="banner">
        <div className="banner-column">
          <div className="banner-text1">{filteredApplicants?.role}</div>
          <div className="banner-text2">
            Job Type: {filteredApplicants?.job_type} | No of Vacancies:&nbsp;
            {filteredApplicants?.number_of_vacancy}
          </div>

          <button
            variant="primary"
            className="apply-button"
            onClick={handleShow}
            disabled={disabled}>
            Apply Now
          </button>
        </div>
        <ReactModal
          isOpen={show}
          onRequestClose={handleClose}
          // You may need to adjust these styles to match your design
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}>
          <Modal.Header closeButton onClick={handleClose}></Modal.Header>
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
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
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
        </ReactModal>
      </div>
    </>
  );
};

export default Banner;
