import React, { Component, useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import url from "../serverURL";
import "../css/model.css";
import { Fragment } from "react";
import { Button } from "react-bootstrap";

function TagInput({ addTags }) {
  const [tag, setTag] = useState("");
  const [verifiedTags, setVerifiedTags] = useState([]);
  const [suggetions, setSuggetions] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/model/tags`)
      .then((res) => setVerifiedTags(res.data.tags))
      .catch((err) => console.log(err));
  }, []);

  const onchange = (value) => {
    setTag(value);
    if (value == "") setSuggetions([]);
    else {
      let suggest = verifiedTags.filter((verifiedTag) =>
        verifiedTag.includes(value)
      );
      setSuggetions(suggest);
    }
  };

  const onClickTags = (keyword) => {
    setSuggetions([]);
    setTag("");
    addTags(keyword);
  };

  return (
    <div className="model__inputDiv mx-auto flex-cloumn">
      <input
        type="text"
        placeholder="Tags"
        value={tag}
        className="model__input"
        onChange={(e) => onchange(e.target.value)}
      />
      <div className="custom__suggest position-absolute">
        <div className="tag__suggest">
          {suggetions.map((keyword, index) => (
            <li
              className="li-none pointer grey-bg pl-4 py-1"
              onClick={() => onClickTags(keyword)}
              key={index}>
              {keyword}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

class Model extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      purchaseURL: "",
      price: "0",
      dimensions: "",
      brand: "",
      fbxFile: null,
      texFile: null,
      imgFile: null,
      errorFbx: "",
      errorImg: "",
      errorTex: "",
      errorMsg: false,
      errorName: "",
      errorPurchaseURL: "",
      errorPrice: "",
      errorDimensions: "",
      errorCate: "",
      errorSubCate: "",
      errorBrand: "",
      error: "",
      success: "",
      modelArr: [],
      loader: true,
      uploader: false,
      /*listTypes: null,*/
      type: "",
      errorType: "",
      user: null,
      admin: false,
      subscribed: null,
      category: "category",
      subCategory: "",
      windowHeight: 0,
      modelIndex: 0,
      modelLimit: 40,
      completeModelList: false,
      searchByCategory: "",
      searchBySuvBategory: "",
      errorTags: "",
      tags: [],
      nomodels: true,
      filterTags: [],
    };
    this.categoryData = {
      "bed room": ["bed", "bedside table", "table lamp", "cabinates", "other"],
      "drawing room": [
        "sofas",
        "chairs",
        "tables",
        "floor lamps",
        "bean bags",
        "other",
      ],
      kitchen: ["tables", "chairs", "kitchen sinks", "other"],
      "dining room": ["tables", "chairs", "other"],
      bathroom: ["sinks", "toilets", "urinals", "bathtub and showers", "other"],
      office: ["chairs", "tables", "lamps", "desks", "other"],
      other: [],
      electrical: ["switches", "lights", "fans", "sockets"],
    };
    this.reactTags = React.createRef();
  }

  nameHandle = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  // ----------tagAdding function------------
  addTag = (tag) => {
    this.setState({ errorTags: "" });
    if (this.state.tags.indexOf(tag) === -1) {
      let updatetags = [...this.state.tags, tag];
      this.setState({
        tags: updatetags,
      });
    }
  };
  addFilterTag = (tag) => {
    if (this.state.filterTags.indexOf(tag) === -1) {
      let updateTags = [...this.state.filterTags, tag];
      this.setState({
        filterTags: updateTags,
      });
      const { filterTags, modelLimit } = this.state;
      this.setState({ loader: true });
      const token = sessionStorage.getItem("token");
      axios
        .get(
          `${url}/model/filter/${token}/${JSON.stringify(
            updateTags
          )}/${modelLimit}/0`
        )
        .then((response) => {
          this.setState({
            user: false,
            modelArr: response.data.modelArr,
            loader: false,
            subscribed: true,
            modelIndex: this.state.modelLimit + 0,
            nomodels: response.data.nomodels,
          });
          for (let model of response.data.modelArr) {
            let update = {};
            update[model.modelId + "IDs"] = model.alternateModelIDs
              ? model.alternateModelIDs.join(", ")
              : "";
            this.setState(update);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  SubmitHandle = (e) => {
    e.preventDefault();
    if (this.state.uploader) return;
    let count = 0;
    const {
      fbxFile,
      imgFile,
      texFile,
      name,
      type,
      price,
      purchaseURL,
      dimensions,
      category,
      subCategory,
      brand,
      errorTags,
      tags,
    } = this.state;

    if (tags.length === 0) {
      this.setState({ errorTags: "Choose a tag" });
      count = count + 1;
    }

    if (type === "electrical") this.setState({ category: "" });

    if (type === "wallpapers" || type === "tiles")
      this.setState({
        subCategory: "",
        purchaseURL: "",
        dimensions: "",
        price: "",
        fbxFile: null,
      });
    else this.setState({ texFile: null });

    if (name.length === 0) {
      this.state.errorName = "Enter Name";
      count = count + 1;
    }

    if (brand.length === 0) {
      this.state.errorBrand = "Enter Brand";
      count = count + 1;
    }

    if (type.length === 0) {
      this.state.errorType = "Choose type";
      count = count + 1;
    }

    if (
      purchaseURL.length === 0 &&
      !(type === "tiles" || type === "wallpapers")
    ) {
      this.state.errorPurchaseURL = "Enter Purchase URL.";
      count = count + 1;
    }

    if (price <= 0 && !(type === "tiles" || type === "wallpapers")) {
      this.state.errorPrice = "Enter Price.";
      count = count + 1;
    }

    if (
      dimensions.length === 0 &&
      !(type === "tiles" || type === "wallpapers")
    ) {
      this.state.errorDimensions = "Enter Dimensions";
      count = count + 1;
    }

    if (fbxFile) {
      if (
        fbxFile.name.substr(fbxFile.name.lastIndexOf(".") + 1).toLowerCase() !=
          "zip" &&
        fbxFile.name.substr(fbxFile.name.lastIndexOf(".") + 1).toLowerCase() !=
          "rar"
      ) {
        this.state.errorFbx = "Upload a .zip file containing .fbx file.";
        count = count + 1;
      }
    } else {
      if (type != "tiles" && type != "wallpapers") {
        this.state.errorFbx = "Upload a .zip file containing .fbx file.";
        count = count + 1;
      }
    }

    if (imgFile) {
      const filetypes = /jpeg|jpg|png/;
      // Check ext
      const extname = filetypes.test(
        imgFile.name.substr(imgFile.name.lastIndexOf(".") + 1).toLowerCase()
      );

      const mimetype = filetypes.test(imgFile.type);

      if (mimetype && extname) {
        console.log("Image is fine");
      } else {
        this.state.errorImg = "Upload an image file";
        count = count + 1;
      }
    } else {
      this.state.errorImg = "Upload an image file";
      count = count + 1;
    }

    if (texFile) {
      const filetypes = /jpeg|jpg|png/;
      // Check ext
      const extname = filetypes.test(
        texFile.name.substr(texFile.name.lastIndexOf(".") + 1).toLowerCase()
      );

      const mimetype = filetypes.test(texFile.type);

      if (mimetype && extname) {
        console.log("Image is fine");
      } else {
        this.state.errorTex = "Upload an image file";
        count = count + 1;
      }
    } else {
      if (type === "tiles" || type === "wallpapers") {
        this.state.errorTex = "Upload an image file";
        count = count + 1;
      }
    }

    if (count != 0) {
      this.setState({
        errorMsg: true,
      });
    } else {
      this.setState({
        uploader: true,
      });
    }
  };

  genHexString = (len) => {
    const hex = "0123456789ABCDEF";
    let output = "";
    for (let i = 0; i < len; ++i) {
      output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
  };

  imgHandle = (e) => {
    this.setState({
      imgFile: e.target.files[0],
    });
  };

  texHandle = (e) => {
    this.setState({
      texFile: e.target.files[0],
    });
  };

  fbxHandle = (e) => {
    this.setState({
      fbxFile: e.target.files[0],
    });
  };

  handleInput = (type, e) => {
    switch (type) {
      case "dimensions":
        this.setState({
          dimensions: e.target.value,
          errorDimensions: "",
        });
        break;

      case "purchaseURL":
        this.setState({
          purchaseURL: e.target.value,
          errorPurchaseURL: "",
        });
        break;

      case "price":
        this.setState({
          price: Number(e.target.value),
          errorPrice: "",
        });
        break;

      case "brand":
        this.setState({
          brand: e.target.value,
          errorBrand: "",
        });
        break;
    }
  };

  componentDidMount() {
    window.scrollTo(0, 1);
    if (typeof sessionStorage.getItem("token") === "string") {
      const token = sessionStorage.getItem("token");
      axios
        .get(`${url}/merchant/profile/${token}`)
        .then((resp) => {
          if (resp.data.user) {
            this.setState({
              user: true,
            });
          } else {
            if (resp.data.admin) {
              // tags updation

              this.setState({
                admin: true,
              });
            } else {
              if (localStorage.getItem("models")) {
                this.setState({ loader: true });
                axios
                  .get(
                    `${url}/model/user/${token}/${this.state.modelLimit}/${this.state.modelIndex}`
                  )
                  .then((response) => {
                    this.setState({
                      user: false,
                      modelArr: response.data.modelArr,
                      loader: false,
                      subscribed: true,
                      modelIndex: this.state.modelLimit + this.state.modelIndex,
                      nomodels: response.data.nomodels,
                    });
                    for (let model of response.data.modelArr) {
                      let update = {};
                      update[model.modelId + "IDs"] = model.alternateModelIDs
                        ? model.alternateModelIDs.join(", ")
                        : "";
                      this.setState(update);
                    }
                  })
                  .catch((err) => console.log(err));
              } else {
                if (!resp.data.uploadLimit) {
                  this.setState({
                    user: false,
                  });
                } else {
                  this.setState({ loader: true });
                  axios
                    .get(
                      `${url}/model/user/${token}/${this.state.modelLimit}/${this.state.modelIndex}`
                    )
                    .then((response) => {
                      this.setState({
                        user: false,
                        modelArr: response.data.modelArr,
                        loader: false,
                        subscribed: true,
                        nomodels: response.data.nomodels,
                        modelIndex:
                          this.state.modelLimit + this.state.modelIndex,
                      });
                      for (let model of response.data.modelArr) {
                        let update = {};
                        update[model.modelId + "IDs"] = model.alternateModelIDs
                          ? model.alternateModelIDs.join(", ")
                          : "";
                        this.setState(update);
                      }
                    })
                    .catch((err) => console.log(err));
                }
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  selectHandle = (e) => {
    let type = e.target.value.trim();

    // Reseting the file input elements
    let fbxinput = document.getElementById("fbxinput");
    let texinput = document.getElementById("texinput");
    let imginput = document.getElementById("imginput");
    if (fbxinput) {
      fbxinput.type = "";
      fbxinput.type = "file";
    }
    if (texinput) {
      texinput.type = "";
      texinput.type = "file";
    }
    if (imginput) {
      imginput.type = "";
      imginput.type = "file";
    }
    if (e.target.value === "electrical") {
      this.setState({
        category: "",
      });
    }

    this.setState({
      type: e.target.value,
      fbxFile: null,
      texFile: null,
      imgFile: null,
      errorFbx: "",
      errorImg: "",
      errorTex: "",
      errorMsg: false,
      errorPurchaseURL: "",
      errorPrice: "",
      errorDimensions: "",
      purchaseURL:
        type === "tiles" || type === "wallpapers" ? "" : this.state.purchaseURL,
      price: type === "tiles" || type === "wallpapers" ? 0 : this.state.price,
      dimensions:
        type === "tiles" || type === "wallpapers" ? "" : this.state.dimensions,
      errorName: "",
      error: "",
      success: "",
      errorType: "",
      errorTags: "",
    });
  };

  cateHandle = (e) => {
    let value = e.target.value.toLowerCase();
    let update = {
      errorCate: "",
      errorSubCate: "",
      subCategory:
        value === "category" || value === "other" ? "" : "sub category",
    };
    update[e.target.name] = value;
    this.setState(update);
  };

  subCateHandle = (e) => {
    let update = { errorSubCate: "" };
    update[e.target.name] = e.target.value.toLowerCase();
    this.setState(update);
  };

  componentDidUpdate() {
    console.log(1);
    const {
      errorTex,
      errorImg,
      errorFbx,
      errorName,
      errorBrand,
      error,
      success,
      fbxFile,
      imgFile,
      texFile,
      name,
      purchaseURL,
      price,
      dimensions,
      category,
      subCategory,
      brand,
      uploader,
      errorType,
      type,
      tags,
      errorTags,
    } = this.state;
    if (uploader) {
      const formData = new FormData();
      const data = [fbxFile, imgFile, texFile];
      data.forEach((item) => {
        formData.append("allFiles", item);
      });

      var fbxName = "";
      var iconName = "";
      var texName = "";
      if (fbxFile) {
        console.log(fbxFile.name);
        fbxName = fbxFile.name;
      }

      if (imgFile) {
        console.log(imgFile.name);
        iconName = imgFile.name;
      }

      if (texFile) {
        console.log(texFile.name);
        texName = texFile.name;
      }

      const modelHex = this.genHexString(10);
      const token = sessionStorage.getItem("token");
      axios
        .post(
          `${url}/model/upload?hex=${modelHex}&name=${name}&token=${token}&tags=${tags}&type=${type}&price=${price}&purchaseURL=${purchaseURL}` +
            `&dimensions=${dimensions}&category=${category}&subCategory=${subCategory}&brand=${brand}&fbxName=${fbxName}&iconName=${iconName}&texName=${texName}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((resp) => {
          if (resp.data.error) {
            this.setState({
              error: resp.data.error,
              uploader: false,
            });
          } else {
            window.location.reload();
            axios
              .get(
                `${url}/model/user/${token}/${this.state.modelLimit}/${this.state.modelIndex}`
              )
              .then((response) => {
                this.setState({
                  modelArr: response.data.modelArr,
                  success: resp.data.success,
                  uploader: false,
                  modelIndex: this.state.modelLimit + this.state.modelIndex,
                  nomodels: response.data.nomodels,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (errorTex.length > 0) {
      this.state.errorTex = "";
    }
    if (errorImg.length > 0) {
      this.state.errorImg = "";
    }
    if (errorFbx.length > 0) {
      this.state.errorFbx = "";
    }
    if (success.length > 0) {
      this.state.success = "";
    }
    if (error.length > 0) {
      this.state.error = "";
    }
    if (errorType.length > 0) {
      this.state.errorType = "";
    }
    if (errorName.length > 0) {
      this.state.errorName = "";
    }
    if (errorTags.length > 0) {
      this.state.errorName = "";
    }
  }

  findImageKey = (keys) => {
    for (let i = 0; i < keys.length; i++) {
      if (
        keys[i].substr(keys[i].lastIndexOf(".") + 1).toLowerCase() === "jpg"
      ) {
        return keys[i];
      }
      if (
        keys[i].substr(keys[i].lastIndexOf(".") + 1).toLowerCase() === "png"
      ) {
        return keys[i];
      }
      if (
        keys[i].substr(keys[i].lastIndexOf(".") + 1).toLowerCase() === "jpeg"
      ) {
        return keys[i];
      }
      if (
        keys[i].substr(keys[i].lastIndexOf(".") + 1).toLowerCase() === "gif"
      ) {
        return keys[i];
      }
    }
  };

  deleteModel = async (e, model) => {
    e.persist();
    if (e.target.textContent === "...") return;
    e.target.textContent = "...";
    let res = await axios.post(
      `${url}/model/deleteModel/${sessionStorage.getItem("token")}`,
      model
    );
    document.getElementById(model.modelId).remove();
  };

  ctc = (e, id) => {
    let text;
    try {
      e.persist();
      e.stopPropagation();
      e.preventDefault();
      text = document.getElementById(id + "copy");
      text.style.display = "inline";
      text.select();
      document.execCommand("copy");
      text.style.display = "none";
      let idDiv = document.getElementById(id + "ID");
      idDiv.classList.add("model__copied");
      setTimeout(() => idDiv.classList.remove("model__copied"), 2000);
    } catch (err) {
      text.style.display = "none";
      console.error(err);
      alert(
        "Failed to copy to clipboard. Make sure writeClipBoard permission is given to javascript in your Browser or copy Manually."
      );
    }
  };

  saveAltIDs = async (e, model) => {
    try {
      e.persist();
      if (e.target.textContent === ".....") return;
      e.target.textContent = ".....";
      let text = document.getElementById(model.modelId + "IDs").value.trim();
      let altIDs = text.split(",");
      altIDs = altIDs.map((x) => x.trim());
      altIDs = altIDs.filter((x) => x);

      let res = await axios.post(
        `${url}/model/saveAltIds/${sessionStorage.getItem("token")}`,
        { altIDs, model }
      );
      e.target.textContent = "SAVE";
    } catch (err) {
      console.error(err);
      e.target.textContent = "SAVE";
      alert("Failed to save Alternate IDs. Try Later.");
    }
  };

  removeTag = (tagToRemove) => {
    let freshTags = this.state.tags.filter((tag) => tag !== tagToRemove);
    this.setState({ tags: freshTags });
  };
  removeFilterTag = (tagToRemove) => {
    let updateTags = this.state.filterTags.filter((tag) => tag !== tagToRemove);
    this.setState({ filterTags: updateTags });
    const { filterTags, modelLimit } = this.state;
    this.setState({ loader: true });
    const token = sessionStorage.getItem("token");
    if (updateTags.length < 1)
      axios
        .get(`${url}/model/user/${token}/${this.state.modelLimit}/0`)
        .then((response) => {
          this.setState({
            user: false,
            modelArr: response.data.modelArr,
            loader: false,
            subscribed: true,
            modelIndex: this.state.modelLimit + 0,
            nomodels: response.data.nomodels,
          });
          for (let model of response.data.modelArr) {
            let update = {};
            update[model.modelId + "IDs"] = model.alternateModelIDs
              ? model.alternateModelIDs.join(", ")
              : "";
            this.setState(update);
          }
        })
        .catch((err) => console.log(err));
    else
      axios
        .get(
          `${url}/model/filter/${token}/${JSON.stringify(
            updateTags
          )}/${modelLimit}/0`
        )
        .then((response) => {
          this.setState({
            user: false,
            modelArr: response.data.modelArr,
            loader: false,
            subscribed: true,
            modelIndex: this.state.modelLimit + 0,
            nomodels: response.data.nomodels,
          });
          for (let model of response.data.modelArr) {
            let update = {};
            update[model.modelId + "IDs"] = model.alternateModelIDs
              ? model.alternateModelIDs.join(", ")
              : "";
            this.setState(update);
          }
        })
        .catch((err) => console.log(err));
  };

  loadMore = (e) => {
    const token = sessionStorage.getItem("token");
    const { filterTags, modelLimit, modelIndex } = this.state;
    if (filterTags.length > 0)
      axios
        .get(
          `${url}/model/filter/${token}/${JSON.stringify(
            filterTags
          )}/${modelLimit}/0`
        )
        .then((response) => {
          this.setState({
            user: false,
            modelArr: response.data.modelArr,
            loader: false,
            subscribed: true,
            modelIndex: this.state.modelLimit + 0,
            nomodels: response.data.nomodels,
          });
          for (let model of response.data.modelArr) {
            let update = {};
            update[model.modelId + "IDs"] = model.alternateModelIDs
              ? model.alternateModelIDs.join(", ")
              : "";
            this.setState(update);
          }
        })
        .catch((err) => console.log(err));
    else
      axios
        .get(`${url}/model/user/${token}/${modelLimit}/${modelIndex}`)
        .then((response) => {
          let models = [...this.state.modelArr, ...response.data.modelArr];
          this.setState({
            modelArr: models,
            modelIndex: this.state.modelLimit + this.state.modelIndex,
            nomodels: response.data.nomodels,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };

  render() {
    const {
      errorTex,
      errorImg,
      errorFbx,
      errorName,
      errorDimensions,
      errorPrice,
      errorPurchaseURL,
      errorCate,
      errorSubCate,
      errorBrand,
      modelArr,
      error,
      success,
      loader,
      uploader,
      errorType,
      type,
      user,
      admin,
      subscribed,
      category,
      subCategory,
      name,
      brand,
      dimensions,
      price,
      purchaseURL,
      tags,
      errorTags,
      filterTags,
    } = this.state;

    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === false &&
      subscribed === true
    ) {
      return (
        <div className="modelCont">
          {/* search by type, category and sub-category for models */}
          <div className="model__tagsDiv col-6">
            {filterTags.map((tag) => (
              <div className="tag tags_bg px-2 mx-1 my-1 py-1">
                {tag}
                <span
                  className="pl-3 pointer"
                  onClick={() => this.removeFilterTag(tag)}>
                  &#10006;
                </span>
              </div>
            ))}
          </div>
          <div className="d-flex">
            <div className="custom__suggest">
              <TagInput addTags={this.addFilterTag} />
            </div>
          </div>

          {/* end search section */}

          {error.length > 0 && <div className="model__alerts">{error}</div>}
          {success.length > 0 && <div className="model__alerts">{success}</div>}
          {!loader ? (
            <div className="model__formDiv">
              <h3 className="model__fromHeading">ADD MODEL</h3>

              <form className="model__form" onSubmit={this.SubmitHandle}>
                <div className="model__inputDiv">
                  <input
                    type="text"
                    placeholder="Name"
                    className="model__input"
                    value={name}
                    onChange={this.nameHandle}
                  />
                </div>
                {errorName.length > 0 && (
                  <div className="model__error">{errorName}</div>
                )}

                <div className="model__inputDiv">
                  <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    className="model__input"
                    onChange={(e) => this.handleInput("brand", e)}
                  />
                </div>
                {errorBrand.length > 0 && (
                  <div className="model__error">{errorBrand}</div>
                )}
                <div className="model__tagsDiv">
                  {tags.map((tag) => (
                    <div className="tag tags_bg px-2 mx-1 my-1 py-1">
                      {tag}
                      <span
                        className="pl-3 pointer"
                        onClick={() => this.removeTag(tag)}>
                        &#10006;
                      </span>
                    </div>
                  ))}
                </div>
                <TagInput addTags={this.addTag} />
                {errorTags.length > 0 && (
                  <div className="model__error">{errorTags}</div>
                )}

                <div className="model__inputDiv">
                  <select
                    onChange={this.selectHandle}
                    className="model__input"
                    name="type"
                    // value={type}
                    placeholder="Type">
                    <option value="select" style={{ fontWeight: "400" }}>
                      Select
                    </option>
                    <option value="furnitures" style={{ fontWeight: "400" }}>
                      Furnitures
                    </option>
                    <option value="appliances" style={{ fontWeight: "400" }}>
                      Appliances
                    </option>
                    <option value="electrical" style={{ fontWeight: "400" }}>
                      Electrical
                    </option>
                    <option value="tiles" style={{ fontWeight: "400" }}>
                      Tiles
                    </option>
                    <option value="wallpapers" style={{ fontWeight: "400" }}>
                      Wallpapers
                    </option>
                  </select>
                </div>
                {errorType.length > 0 && (
                  <div className="model__error">{errorType}</div>
                )}

                {(type === "furnitures" ||
                  type === "appliances" ||
                  type === "electrical") && (
                  <Fragment>
                    <div className="model__inputDiv">
                      <input
                        type="text"
                        placeholder="Dimension Details"
                        className="model__input"
                        value={dimensions}
                        onChange={(e) => this.handleInput("dimensions", e)}
                      />
                    </div>
                    {errorDimensions.length > 0 && (
                      <div className="model__error">{errorDimensions}</div>
                    )}
                    <div className="model__inputDiv">
                      <input
                        type="text"
                        placeholder="Price (₹)"
                        className="model__input"
                        value={price}
                        onChange={(e) => this.handleInput("price", e)}
                      />
                    </div>
                    {errorPrice.length > 0 && (
                      <div className="model__error">{errorPrice}</div>
                    )}
                    <div className="model__inputDiv">
                      <input
                        type="text"
                        value={purchaseURL}
                        placeholder="Purchase URL"
                        className="model__input"
                        onChange={(e) => this.handleInput("purchaseURL", e)}
                      />
                    </div>
                    {errorPurchaseURL.length > 0 && (
                      <div className="model__error">{errorPurchaseURL}</div>
                    )}
                  </Fragment>
                )}

                {type && type != "select" && (
                  <div className="model__fileDiv">
                    {(type === "furnitures" ||
                      type === "appliances" ||
                      type === "electrical") && (
                      <div>
                        <label for="Model">
                          Model (.zip file containing .fbx file.)
                        </label>

                        <input
                          label="Upload file"
                          id="fbxinput"
                          type="file"
                          onChange={this.fbxHandle}
                        />
                        {errorFbx.length > 0 && (
                          <div className="model__error"> {errorFbx}</div>
                        )}
                      </div>
                    )}

                    {!(
                      type === "furnitures" ||
                      type === "appliances" ||
                      type === "electrical"
                    ) && (
                      <div>
                        <label for="Textures">
                          Textures (.jpg, .jpeg, .png)
                        </label>
                        <br></br>
                        <input
                          label="Upload file"
                          id="texinput"
                          type="file"
                          onChange={this.texHandle}
                        />
                        {errorTex.length > 0 && (
                          <div className="model__error">{errorTex}</div>
                        )}
                      </div>
                    )}

                    <div>
                      <label for="Preview">
                        Preview Image (.jpg, .jpeg, .png)
                      </label>
                      <br></br>
                      <input
                        label="Upload file"
                        id="imginput"
                        type="file"
                        onChange={this.imgHandle}
                      />

                      {errorImg.length > 0 && (
                        <div className="model__error">{errorImg}</div>
                      )}
                    </div>
                  </div>
                )}
                {uploader === true && (
                  <p style={{ textAlign: "center" }}>Uploading...</p>
                )}
                <button className="model__uploadBtn" type="submit">
                  Upload Model
                </button>
              </form>
            </div>
          ) : null}

          <h1 className="model__heading">MODELS</h1>

          {loader === true ? (
            <div className="loader__modal">
              <Loader type="Circles" color="#2C2D30" height={30} width={30} />
            </div>
          ) : modelArr.length > 0 ? (
            <div className="text-center">
              <div className="models">
                {modelArr.map((model) => {
                  return (
                    <div
                      key={model.modelId}
                      className="model"
                      id={model.modelId}>
                      <span
                        className="model__delete"
                        onClick={(e) =>
                          this.deleteModel(e, model).catch((err) => {
                            e.target.innerHTML = "&times;";
                            console.error(err);
                            alert("Failed to delete the model. Try later.");
                          })
                        }>
                        &times;
                      </span>
                      <Link
                        className="model__link"
                        to={`/download/${model.modelId}`}>
                        <img
                          className="model__img"
                          src={`${model.previewLocation}`}
                        />
                        <h3 className="model__name">{model.modelName}</h3>
                        <p className="model__id" id={`${model.modelId}ID`}>
                          ID: {model.modelId}&nbsp;&nbsp;
                          <img
                            src="./media/CTC.png"
                            className="model__ctc"
                            onClick={(e) => this.ctc(e, model.modelId)}
                          />
                          <input
                            type="text"
                            id={`${model.modelId}copy`}
                            value={model.modelId}
                            style={{ display: "none" }}
                          />
                        </p>

                        <div
                          className="model__asids__div"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}>
                          <input
                            className="model__asids__input"
                            type="text"
                            id={`${model.modelId}IDs`}
                            value={this.state[`${model.modelId}IDs`]}
                            onChange={(e) => {
                              let update = {};
                              update[`${model.modelId}IDs`] = e.target.value;
                              this.setState(update);
                            }}
                            placeholder="Alternate IDs(comma saparated)"
                          />
                          <button
                            className="model__asids__btn"
                            onClick={(e) => this.saveAltIDs(e, model)}>
                            SAVE
                          </button>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {!this.state.nomodels ? (
                <button
                  className="model__uploadBtn text-center"
                  onClick={this.loadMore}>
                  Load More
                </button>
              ) : null}
            </div>
          ) : (
            <h4 className="model__noModel">There are no models available</h4>
          )}
        </div>
      );
    }
    if (typeof sessionStorage.getItem("token") === "string" && user === true) {
      return <Redirect to="/welcome_user" />;
    }
    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === false &&
      subscribed === null
    ) {
      return <Redirect to="/plans" />;
    }
    if (typeof sessionStorage.getItem("token") === "string" && admin === true) {
      return <Redirect to="/welcome_admin" />;
    }
    if (
      typeof sessionStorage.getItem("token") === "string" &&
      user === null &&
      admin === false
    ) {
      return (
        <div className="loader__modal">
          <Loader type="Circles" color="#1752DB" height={40} width={40} />
        </div>
      );
    }
    if (typeof sessionStorage.getItem("token") != "string") {
      return <Redirect to="/" />;
    }
  }
}

export default Model;
