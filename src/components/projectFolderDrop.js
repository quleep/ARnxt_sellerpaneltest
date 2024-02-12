import React, { useState, useEffect, useMemo } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Loader from "react-loader-spinner";
import { useDropzone } from "react-dropzone";
import url from "../serverURL";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function ProjectFolderDrop({
  userId,
  projectId,
  setError,
  setImgSuccess,
  setErrorName,
  setSuccess,
  setDeleteMsg,
  setErrorImg,
  imgSuccess,
  error,
  errorName,
  errorImg,
  deleteMsg,
  success,
}) {
  const checkBoxUniqueId = String(Math.random()).slice(4);

  let {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const [previewImages, setPreviewImages] = useState([]);
  const [dropImages, setDropImages] = useState(false);
  const [uploader, setUploader] = useState(false);

  const thumbs = previewImages.map((previewImage) => (
    <div style={thumb} key={previewImage}>
      <div style={thumbInner}>
        <img src={previewImage} style={img} />
      </div>
    </div>
  ));

  useEffect(() => {
    if (uploader) {
      let formData = new FormData();
      acceptedFiles.forEach((img) => {
        formData.append("allImg", img);
      });
      axios
        .post(
          `${url}/user/project/img/upload?userId=${userId}&projectId=${projectId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((resp) => {
          if (resp.data.error) {
            if (errorName.length > 0) {
              setErrorName("");
            }
            if (deleteMsg.length > 0) {
              setDeleteMsg("");
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
            setUploader(false);
            setError(resp.data.error);
          } else {
            let imgSuccessMsg;
            if (acceptedFiles.length > 1) {
              imgSuccessMsg = "Images have been added";
            } else {
              imgSuccessMsg = "Image has been added";
            }
            acceptedFiles = [];
            if (errorName.length > 0) {
              setErrorName("");
            }

            if (error.length > 0) {
              setError("");
            }
            if (errorImg.length > 0) {
              setErrorImg("");
            }

            if (deleteMsg.length > 0) {
              setDeleteMsg("");
            }

            if (success) {
              setSuccess(false);
            }
            setUploader(false);
            setImgSuccess(imgSuccessMsg);
            setPreviewImages([]);
          }
        })
        .catch((err) => console.log(err));
    }
    if (acceptedFiles.length > 0) {
      if (errorName.length > 0) {
        setErrorName("");
      }

      if (deleteMsg.length > 0) {
        setDeleteMsg("");
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
      let newAcceptedFiles = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(newAcceptedFiles);
    }
  }, [uploader, acceptedFiles]);

  const checkDropImage = (e) => {
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
    setDropImages(!dropImages);
  };

  const uploadImg = () => {
    if (acceptedFiles.length === 0) {
      if (errorName.length > 0) {
        setErrorName("");
      }

      if (error.length > 0) {
        setError("");
      }
      if (imgSuccess.length > 0) {
        setImgSuccess("");
      }

      if (success) {
        setSuccess(false);
      }

      if (deleteMsg.length > 0) {
        setDeleteMsg("");
      }
      setErrorImg("Upload at least one image");
    } else {
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
      setUploader(true);
    }
  };

  return (
    <div>
      <div
        style={{ display: "flex", padding: " 0 2rem", paddingBottom: "1rem" }}>
        <input
          id={checkBoxUniqueId}
          className="addUserProject__checkbox"
          type="checkbox"
          onChange={(e) => checkDropImage(e)}
          style={{ marginRight: "10px" }}
        />
        <label for={checkBoxUniqueId} className="addUserProject">
          Add Images
        </label>
      </div>
      {dropImages && (
        <div style={{ marginTop: "20px" }}>
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside className="userPro__thumbsCont" style={thumbsContainer}>
            {thumbs}
          </aside>
          {errorImg.length > 0 && (
            <div
              style={{
                marginBottom: "1rem",
                marginLeft: "2rem",
                fontSize: "0.9rem",
                color: "red",
                fontWeight: "400",
              }}
              className="d-flex">
              {errorImg}
            </div>
          )}
          <div
            style={{
              textAlign: "left",
              padding: "0 2rem",
              paddingBottom: "1rem",
            }}>
            <button onClick={() => uploadImg()} className="userPro__uploadBtn">
              Upload
            </button>
          </div>
          {uploader === true && (
            <div className="loader__modal">
              <h1 className="loader__heading">Uploading</h1>
              <Loader type="Circles" color="white" height={40} width={40} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectFolderDrop;
