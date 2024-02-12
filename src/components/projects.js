import React, { useState, useEffect, useMemo } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/userProjects.css";
import { Redirect, Link } from "react-router-dom";
import ProjectFolderDrop from "./projectFolderDrop.js";
import axios from "axios";
import Loader from "react-loader-spinner";
import url from "../serverURL";

let count = 0;

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);
  const [subscribed, setSubscribed] = useState(null);
  let [projectsList, setProjectsList] = useState([]);
  const [imgSuccess, setImgSuccess] = useState("");
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorImg, setErrorImg] = useState("");
  const [deleteMsg, setDeleteMsg] = useState("");
  const [create, setCreate] = useState(false);
  const [success, setSuccess] = useState(false);

  let token;
  if (typeof sessionStorage.getItem("token") === "string") {
    token = sessionStorage.getItem("token");
  } else {
    token = null;
  }

  useEffect(() => {
    if (typeof sessionStorage.getItem("token") === "string") {
      if (true) {
        axios
          .get(`${url}/user/profile/${token}`)
          .then((resp) => {
            if (resp.data.user) {
              axios
                .post(`${url}/user/projects/${token}`)
                .then((response) => {
                  setUser(true);
                  setProjectsList(response.data.projectsList);
                })
                .catch((err) => console.log(err));
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
      if (create) {
        axios
          .post(`${url}/user/user_project?token=${token}&name=${name}`)
          .then((resp) => {
            if (resp.data.status) {
              axios
                .post(`${url}/user/projects/${token}`)
                .then((response) => {
                  if (errorName.length > 0) {
                    setErrorName("");
                  }

                  if (error.length > 0) {
                    setError("");
                  }
                  if (imgSuccess.length > 0) {
                    setImgSuccess("");
                  }

                  if (errorImg.length > 0) {
                    setErrorImg("");
                  }

                  if (deleteMsg.length > 0) {
                    setDeleteMsg("");
                  }

                  setCreate(false);
                  setSuccess(true);
                  setProjectsList(response.data.projectsList);
                })
                .catch((err) => console.log(err));
            } else {
              if (error.length > 0) {
                setError("");
              }
              if (imgSuccess.length > 0) {
                setImgSuccess("");
              }

              if (errorImg.length > 0) {
                setErrorImg("");
              }

              if (success) {
                setSuccess(false);
              }

              if (deleteMsg.length > 0) {
                setDeleteMsg("");
              }
              setCreate(false);
              setErrorName(resp.data.error);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  }, [token, create]);

  const nameHandle = (e) => {
    if (errorName.length > 0) {
      setErrorName("");
    }

    if (error.length > 0) {
      setError("");
    }
    if (imgSuccess.length > 0) {
      setImgSuccess("");
    }

    if (deleteMsg.length > 0) {
      setDeleteMsg("");
    }

    if (errorImg.length > 0) {
      setErrorImg("");
    }

    if (success) {
      setSuccess(false);
    }
    setName(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      setErrorName("Give a project name");
    } else {
      setCreate(true);
    }
  };

  const deleteHandle = (user, proj) => {
    axios
      .post(`${url}/user/delete_project?userId=${user}&projectId=${proj}`)
      .then((resp) => {
        if (resp.data.error) {
          if (errorName.length > 0) {
            setErrorName("");
          }

          if (imgSuccess.length > 0) {
            setImgSuccess("");
          }

          if (errorImg.length > 0) {
            setErrorImg("");
          }

          if (success) {
            setSuccess(false);
          }

          if (deleteMsg.length > 0) {
            setDeleteMsg("");
          }
          setError(resp.data.error);
        } else {
          let id = projectsList.findIndex(
            (project) => project.projectId === proj && project.userId === user
          );
          projectsList.splice(id, 1);
          if (errorName.length > 0) {
            setErrorName("");
          }

          if (error.length > 0) {
            setError("");
          }
          if (imgSuccess.length > 0) {
            setImgSuccess("");
          }

          if (errorImg.length > 0) {
            setErrorImg("");
          }

          if (success) {
            setSuccess(false);
          }
          if (deleteMsg.length > 0) {
            setDeleteMsg("");
          }
          setProjectsList(projectsList);
          setDeleteMsg("Project deleted");
        }
      })
      .catch((err) => console.log(err));
  };

  if (typeof sessionStorage.getItem("token") === "string") {
    if (user === null && admin === false) {
      return (
        <div className="loader__modal">
          <Loader type="Circles" color="#1752DB" height={40} width={40} />
        </div>
      );
    }
    if (user === true) {
      return (
        <div className="container userProCont">
          {success === true && (
            <div role="alert" className="userPro__alert">
              Project added
            </div>
          )}
          {error.length > 0 && (
            <div role="alert" className="userPro__alert">
              {error}
            </div>
          )}
          {imgSuccess.length > 0 && (
            <div role="alert" className="userPro__alert">
              {imgSuccess}
            </div>
          )}
          {deleteMsg.length > 0 && (
            <div role="alert" className="userPro__alert">
              {deleteMsg}
            </div>
          )}

          <h3 className="userPro__heading">Projects</h3>

          {projectsList.length > 0 ? (
            projectsList.map((project) => {
              const { projectId, projectName, userId } = project;
              return (
                <div className="userPro__project">
                  <div className="userPro__project__upper">
                    <Link
                      to={`/user/project/${projectId}/${userId}`}
                      className="userPro__link">
                      {projectName}
                      <span className="linksym">&#128279;</span>
                    </Link>
                    <button
                      onClick={() => deleteHandle(userId, projectId)}
                      className="userPro__deleteBtn">
                      Delete
                    </button>
                  </div>

                  <ProjectFolderDrop
                    userId={userId}
                    projectId={projectId}
                    setError={setError}
                    setSuccess={setSuccess}
                    setErrorName={setErrorName}
                    setImgSuccess={setImgSuccess}
                    setDeleteMsg={setDeleteMsg}
                    setErrorImg={setErrorImg}
                    success={success}
                    imgSuccess={imgSuccess}
                    error={error}
                    deleteMsg={deleteMsg}
                    errorImg={errorImg}
                    errorName={errorName}
                  />
                </div>
              );
            })
          ) : (
            <h4 className="userPro__noProHeading">
              There are no projects available
            </h4>
          )}

          <div className="userPro__formmDiv">
            <h4 className="userPro__formmHeading">Create new project</h4>
            <form className="userPro__form" onSubmit={(e) => submitHandle(e)}>
              <div className="userPro__inputDiv">
                {/* <i class="fa fa-fw fa-user"
                                        style={{
                                            position: "absolute",
                                            padding: "10px",
                                            paddingTop: "12px",
                                            minWidth: "40px"
                                        }}>
                                    </i> */}
                <input
                  type="text"
                  placeholder="Project Name"
                  className="userPro__input"
                  onChange={(e) => nameHandle(e)}
                />
              </div>

              {errorName.length > 0 && (
                <div className="userPro__error">{errorName}</div>
              )}

              <button className="userPro__submitBtn" type="submit">
                Create
              </button>

              {create === true && (
                <div
                  style={{
                    textAlign: "center",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}>
                  <h3
                    style={{
                      fontFamily: "inherit",
                      fontWeight: "300",
                      margin: "1rem",
                    }}>
                    Creating
                  </h3>
                  <Loader
                    type="Circles"
                    color="#1752DB"
                    height={30}
                    width={30}
                    style={{ marginTop: "40px" }}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      );
    }
    if (user === false && subscribed === true) {
      return <Redirect to="/models" />;
    }
    if (user === false && subscribed === null) {
      return <Redirect to="/plans" />;
    }
    if (admin === true) {
      return <Redirect to="/welcome_admin" />;
    }
  } else {
    return <Redirect to="/" />;
  }
}

export default Projects;
