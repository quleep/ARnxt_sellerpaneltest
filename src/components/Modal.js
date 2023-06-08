// import React, { useState } from "react";

// import axios from "axios";
// import AWS from "aws-sdk";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
// const Modal = ({ modal, setModal, openModal, close, jobId, showSnackbar }) => {
//   AWS.config.update({
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//     region: "us-east-1",
//     signatureVersion: "v4",
//   });
//   const s3 = new AWS.S3();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [resume, setResume] = useState(null);
//   const [contactError, setContactError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const now = new Date();
//   const appliedDate = now.toISOString();

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleContactChange = (event) => {
//     const value = event.target.value;
//     if (value.length <= 10) {
//       setContact(value);
//       setContactError("");
//     } else {
//       setContactError("* Contact number should be 10 or less than 10");
//     }
//   };

//   const handleResumeChange = (event) => {
//     setResume(event.target.files[0]);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     const params = {
//       Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
//       Key: `${Date.now()}-${resume.name}`,
//       Body: resume,
//     };

//     try {
//       const data = await s3.upload(params).promise();
//       const newApplicant = {
//         name: name,
//         emailid: email,
//         contactNumber: contact,
//         resumeUrl: data.Location,
//         applied_date: appliedDate,
//         job_id: jobId,
//       };

//       const res = await axios.post(
//         "https://3pg8ch1ir2.execute-api.us-east-1.amazonaws.com/prod/applicant",
//         newApplicant
//       );
//       close();
//       showSnackbar();
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div className="modal">
//       <button
//         type="button"
//         class="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModalLong">
//         Launch demo modal
//       </button>

//       <div
//         class="modal fade"
//         id="exampleModalLong"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLongTitle"
//         aria-hidden="true">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div className="modal-content">
//                 <form
//                   className="card-form"
//                   encType="multipart/form-data"
//                   onSubmit={handleSubmit}>
//                   <div className="name">Name</div>
//                   <input
//                     type="text"
//                     className="name-input"
//                     required
//                     onChange={handleNameChange}
//                   />
//                   <div className="name">Email ID</div>
//                   <input
//                     type="email"
//                     className="name-input"
//                     required
//                     onChange={handleEmailChange}
//                   />
//                   <div className="name">Contact Number:</div>
//                   <input
//                     type="number"
//                     className="name-input"
//                     required
//                     onChange={handleContactChange}
//                   />

//                   {contactError && <div className="error">{contactError}</div>}
//                   <div className="name">Upload Resume/CV:</div>
//                   <input
//                     type="file"
//                     name="resume"
//                     className="name-input"
//                     accept=".pdf"
//                     required
//                     onChange={handleResumeChange}
//                   />
//                   {isLoading && <div className="loader"></div>}
//                   <button
//                     className="action-button"
//                     type="submit"
//                     disabled={isLoading}>
//                     {isLoading ? "Uploading..." : "Upload"}
//                   </button>
//                 </form>
//                 <button className="close-modal">X</button>
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-dismiss="modal">
//                 Close
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
