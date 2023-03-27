import React, {useState, useEffect, Component, Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import download from 'downloadjs';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axios from 'axios';
import url from '../serverURL';
import '../css/miscClasses.css';

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

  const enterTag = (e) => {
    console.log(e.target.value);
    console.log(e.key);
  };

  const onchange = (value) => {
    setTag(value);
    if (value == "") setSuggetions([]);
    else {
      let suggest = verifiedTags.filter((verifiedTag) =>
        verifiedTag.includes(value)
      );
      setSuggetions(suggest);
    }
    console.log(suggetions);
  };

  const onClickTags = (keyword) => {
    setSuggetions([]);
    setTag("");
    addTags(keyword);
  };

  return (
    <div className="model__inputDiv flex-cloumn">
      <input
        type="text"
        placeholder="Tags"
        value={tag}
        className="model__input"
        onChange={(e) => onchange(e.target.value)}
      />
      <div className="">
        {suggetions.map((keyword, index) => (
          <li
            className="li-none pointer grey-bg pl-4 py-1 custom"
            onClick={() => onClickTags(keyword)}
            key={index}
          >
            {keyword}
          </li>
        ))}
      </div>
    </div>
  );
}

class Download extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      name: "",
      purchaseURL: "",
      price: 0,
      dimensions: "",
      brand: "",
      newName: "",
      category: "category",
      subCategory: "",
      files: null,
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
      uploader: false,
      /*listTypes: null,*/
      oldType: "",
      type: null,
      errorType: "",
      tags: [],
      errorTags: "",
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
  }

  onDownload = (e) => {
    e.persist();
    if (e.target.textContent === "Downloading...") return;
    this.setState({
      loader: true,
    });
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");
    const { model } = this.props;
    axios
      .get(`${url}/model/files?model=${model}&token=${token}`)
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          name: resp.data.modelName,
          newName: resp.data.modelName,
          files: resp.data.modelFiles,
          type: resp.data.modelType,
          oldType: resp.data.modelType,
          modelInfo: resp.data,
          purchaseURL: resp.data.purchaseURL || "",
          price: resp.data.price || 0,
          dimensions: resp.data.dimensions || "",
          category: resp.data.modelCategory || "category",
          subCategory: resp.data.modelSubCategory || "",
          brand: resp.data.modelBrand || "",
          isHidden: !!resp.data.isHidden,
          offSetX: resp.data.offSetX || "",
          offSetY: resp.data.offSetY || "",
          offSetZ: resp.data.offSetZ || "",
          tags: resp.data.tags || [],
        });
      })
      .catch((err) => console.log(err));
  }

  async componentDidUpdate() {
    window.scrollTo(0, 1);
    const token = sessionStorage.getItem("token");
    const { model } = this.props;
    const {
      loader,
      files,
      name,
      uploader,
      modelInfo,
      newName,
      type,
      imgFile,
      texFile,
      fbxFile,
      price,
      purchaseURL,
      dimensions,
      category,
      subCategory,
      isHidden,
      offSetX,
      offSetY,
      offSetZ,
      brand,
      tags,
    } = this.state;

    if (loader) {
      const resp = await fetch(
        `${url}/model/download?folder=${model}&keyArr=${files.join(";")}`
      );
      const data = await resp.blob();
      await download(data, `${name}.zip`);
      this.setState({
        loader: false,
      });
    } // Loader if ends

    if (uploader) {
      let edits = {
        newName,
        type,
        price,
        purchaseURL,
        dimensions,
        category,
        subCategory,
        isHidden,
        brand,
        tags,
        offSetX: offSetX || 0,
        offSetY: offSetY || 0,
        offSetZ: offSetZ || 0,
      };
      let body = new FormData();
      body.set("ModelInfo", JSON.stringify(modelInfo));
      body.set("Edits", JSON.stringify(edits));
      if (imgFile) body.append("Files", imgFile, imgFile.name);
      if (fbxFile) body.append("Files", fbxFile, fbxFile.name);
      if (texFile) body.append("Files", texFile, texFile.name);

      try {
        console.log(body);
        let res = await axios.post(`${url}/model/updateModel/${token}`, body, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("RES", res.data);
        this.setState({ uploader: false });
        window.open("/models", "_self");
      } catch (err) {
        console.error(err);
        alert("Failed to Update Model. Try later");
        this.setState({ uploader: false });
      } //try catch ends
    } //Uploader if ends
  } //ComponentDidUpdate() ends

  SubmitHandle = (e) => {
    e.preventDefault();
    if (this.state.uploader) return;
    let count = 0;
    const {
      fbxFile,
      imgFile,
      texFile,
      newName,
      type,
      oldType,
      price,
      purchaseURL,
      dimensions,
      category,
      subCategory,
      brand,
      tags,
    } = this.state;

    if (type === "electrical") this.setState({ category: "" });

    if (type === "wallpapers" && type === "tiles")
      this.setState({ subCategory: "" });

    if (newName.length === 0) {
      this.state.errorName = "Enter Name";
      count = count + 1;
    }

    if (tags.length === 0) {
      this.state.errorTags = "Choose Tag";
      count = count + 1;
    }

    if (brand.length === 0) {
      this.state.errorBrand = "Enter Brand";
      count = count + 1;
    }

    if (
      purchaseURL.length === 0 &&
      !(type === "tiles" || type === "wallpapers")
    ) {
      this.state.errorPurchaseURL = "Enter Purchase URL.";
      count = count + 1;
    }

    // if ((!category || category === "category") && type !== "electrical") {
    //   this.state.errorCate = "Select Category.";
    //   count = count + 1;
    // }

    // if (subCategory === "sub category" && type !== "wallpapers") {
    //   this.state.errorSubCate = "Select Sub Category.";
    //   count = count + 1;
    // }

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
      if (type !== "tiles") {
        // && type !== 'wallpapers'
        if (oldType === "tiles") {
          // || oldType === "wallpapers"
          this.state.errorFbx = "Upload a .zip file containing .fbx file.";
          count = count + 1;
        }
      }
    }

    if (imgFile) {
      const filetypes = /jpeg|jpg|png|gif/;
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
    }

    // else {
    //     this.state.errorImg = 'Upload an image file';
    //     count = (count + 1);
    // }

    if (texFile) {
      if (
        texFile.name.substr(texFile.name.lastIndexOf(".") + 1).toLowerCase() !=
          "rar" &&
        texFile.name.substr(texFile.name.lastIndexOf(".") + 1).toLowerCase() !=
          "zip"
      ) {
        this.state.errorTex = "Upload a zip file";
        count = count + 1;
      }
    } else {
      if (type === "tiles") {
        if (!(oldType === "tiles")) {
          this.state.errorTex = "Upload a zip file";
          count = count + 1;
        }
      }
    }

    if (!type) {
      this.state.errorType = "Choose a type of model";
    }
    if (type === "select") {
      this.state.errorType = "Choose a type of model";
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

  // ----------tagAdding function------------
  addTag = (tag) => {
    console.log(tag);
    this.setState({ errorTags: "" });
    if (this.state.tags.indexOf(tag) === -1) {
      let updatetags = [...this.state.tags, tag];
      this.setState({
        tags: updatetags,
      });
    }
  };

  removeTag = (tagToRemove) => {
    let freshTags = this.state.tags.filter((tag) => tag !== tagToRemove);
    this.setState({ tags: freshTags });
  };

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
      errorPurchaseURL: "",
      errorPrice: "",
      purchaseURL:
        type === "tiles" || type === "wallpapers" ? "" : this.state.purchaseURL,
      price: type === "tiles" || type === "wallpapers" ? 0 : this.state.price,
      dimensions:
        type === "tiles" || type === "wallpapers" ? "" : this.state.dimensions,
      errorDimensions: "",
      errorMsg: false,
      errorName: "",
      error: "",
      success: "",
        errorType: "",
      errorTags:""
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

  isHiddenHandle = (e) => {
    this.setState({ isHidden: e.target.value === "true" ? true : false });
  };

  nameHandle = (e) => {
    this.setState({
      newName: e.target.value,
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
      case "offSetX":
        this.setState({
          offSetX: Number(e.target.value),
        });
        break;
      case "offSetY":
        this.setState({
          offSetY: Number(e.target.value),
        });
        break;
      case "offSetZ":
        this.setState({
          offSetZ: Number(e.target.value),
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

  render() {
    const {
      loader,
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
      uploader,
      errorType,
      name,
      brand,
      purchaseURL,
      price,
      dimensions,
      category,
      subCategory,
      newName,
      oldType,
      type,
      isHidden,
      offSetX,
      offSetY,
      offSetZ,
      tags,
      errorTags,
    } = this.state;
    return (
      <div className="container centerCont">
        {!uploader ? (
          <button className="btn" type="submit" onClick={this.onDownload}>
            {loader ? "Downloading..." : "Download Model"}
          </button>
        ) : null}

        {!loader ? (
          <div className="model__formDiv">
            <h3 className="model__fromHeading">UPDATE MODEL</h3>

            <form className="model__form" onSubmit={this.SubmitHandle}>
              <div className="model__inputDiv">
                <input
                  type="name"
                  placeholder="Name"
                  className="model__input"
                  value={newName}
                  onChange={this.nameHandle}
                />
              </div>
              {errorName.length > 0 && (
                <div className="model__error">{errorName}</div>
              )}

              <div className="model__inputDiv">
                <input
                  type="brand"
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
                      onClick={() => this.removeTag(tag)}
                    >
                      &#10006;
                    </span>
                  </div>
                ))}
              </div>
              <TagInput addTags={this.addTag} />
              {errorTags.length > 0 && (
                <div className="model__error">{errorTags}</div>
              )}

              {/* <div className="model__inputDiv">
                <select
                  onChange={this.selectHandle}
                  className="model__input"
                  // name="category"
                  // placeholder="Category"
                  value={type}
                  name="type"
                  placeholder="Type"
                >
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

              {type !== "electrical" ? (
                <div className="model__inputDiv">
                  <select
                    onChange={this.cateHandle}
                    className="model__input"
                    value={category}
                    name="category"
                    placeholder="Category"
                  >
                    <option value="category" style={{ fontWeight: "400" }}>
                      Category
                    </option>
                    <option value="bed room" style={{ fontWeight: "400" }}>
                      Bed Room
                    </option>
                    <option value="drawing room" style={{ fontWeight: "400" }}>
                      Drawing Room
                    </option>
                    <option value="kitchen" style={{ fontWeight: "400" }}>
                      Kitchen
                    </option>
                    <option value="dining room" style={{ fontWeight: "400" }}>
                      Dining Room
                    </option>
                    <option value="bathroom" style={{ fontWeight: "400" }}>
                      Bathroom
                    </option>
                    <option value="office" style={{ fontWeight: "400" }}>
                      Office
                    </option>
                    <option value="other" style={{ fontWeight: "400" }}>
                      Other
                    </option>
                  </select>
                </div>
              ) : null}

              {errorCate.length > 0 && (
                <div className="model__error">{errorCate}</div>
              )} */}

              {/* {category && category !== "category" && category !== "other" ? (
                <Fragment>
                  {type !== "wallpapers" ? (
                    <div className="model__inputDiv">
                      <select
                        onChange={this.subCateHandle}
                        className="model__input"
                        name="subCategory"
                        placeholder="sub category"
                        value={subCategory}
                      >
                        <option
                          value="sub category"
                          style={{ fontWeight: "400" }}
                        >
                          Sub category
                        </option>
                        {this.categoryData[category] ? (
                          <Fragment>
                            {this.categoryData[category].map((sc) => (
                              <option value={sc} style={{ fontWeight: "400" }}>
                                {sc}
                              </option>
                            ))}
                          </Fragment>
                        ) : null}
                      </select>
                    </div>
                  ) : null}

                  {errorSubCate.length > 0 && (
                    <div className="model__error">{errorSubCate}</div>
                  )}
                </Fragment>
              ) : type === "electrical" ? (
                <Fragment>
                  <div className="model__inputDiv">
                    <select
                      onChange={this.subCateHandle}
                      className="model__input"
                      name="subCategory"
                      placeholder="sub category"
                      value={subCategory}
                    >
                      <option
                        value="sub category"
                        style={{ fontWeight: "400" }}
                      >
                        Sub category
                      </option>
                      {this.categoryData[type] ? (
                        <Fragment>
                          {this.categoryData[type].map((sc) => (
                            <option value={sc} style={{ fontWeight: "400" }}>
                              {sc}
                            </option>
                          ))}
                        </Fragment>
                      ) : null}
                    </select>
                  </div>
                  {errorSubCate.length > 0 && (
                    <div className="model__error">{errorSubCate}</div>
                  )}
                </Fragment> 
               ) : null} */}

              <div className="model__inputDiv">
                <select
                  onChange={this.isHiddenHandle}
                  className="model__input"
                  value={isHidden ? "true" : "false"}
                  name="category"
                  placeholder="Category"
                >
                  <option value="false" style={{ fontWeight: "400" }}>
                    Don't Hide model
                  </option>
                  <option value="true" style={{ fontWeight: "400" }}>
                    Hide model
                  </option>
                </select>
              </div>

              <p className="model__label">Position Offset</p>
              <div className="model__xyz">
                <input
                  type="number"
                  step="any"
                  onChange={(e) => this.handleInput("offSetX", e)}
                  className="model__x"
                  value={offSetX}
                  name="offSetX"
                  placeholder="X"
                />
                <input
                  type="number"
                  step="any"
                  onChange={(e) => this.handleInput("offSetY", e)}
                  className="model__y"
                  value={offSetY}
                  name="offSetY"
                  placeholder="Y"
                />
                <input
                  type="number"
                  step="any"
                  onChange={(e) => this.handleInput("offSetZ", e)}
                  className="model__z"
                  value={offSetZ}
                  name="offSetZ"
                  placeholder="Z"
                />
              </div>

              {(type === "furnitures" ||
                type === "appliances" ||
                type === "Electrical") && (
                <Fragment>
                  <div className="model__inputDiv">
                    <input
                      type="name"
                      placeholder="Dimension Details"
                      value={dimensions}
                      className="model__input"
                      onChange={(e) => this.handleInput("dimensions", e)}
                    />
                  </div>
                  {errorDimensions.length > 0 && (
                    <div className="model__error">{errorDimensions}</div>
                  )}
                  <div className="model__inputDiv">
                    <input
                      type="number"
                      placeholder="Price (₹)"
                      value={price}
                      className="model__input"
                      onChange={(e) => this.handleInput("price", e)}
                    />
                  </div>
                  {errorPrice.length > 0 && (
                    <div className="model__error">{errorPrice}</div>
                  )}
                  <div className="model__inputDiv">
                    <input
                      type="name"
                      placeholder="Purchase URL"
                      value={purchaseURL}
                      className="model__input"
                      onChange={(e) => this.handleInput("purchaseURL", e)}
                    />
                  </div>
                  {errorPurchaseURL.length > 0 && (
                    <div className="model__error">{errorPurchaseURL}</div>
                  )}
                </Fragment>
              )}

              {type && (
                <div>
                  {type != "select" && (
                    <div className="model__fileDiv">
                      {(type === "furnitures" ||
                        type === "appliances" ||
                        type === "Electrical") && (
                        <div>
                          <label
                            for="Model"
                            style={{ fontSize: ".9rem", fontWeight: "600" }}
                          >
                            {oldType === "furnitures" ||
                            oldType === "appliances" ||
                            oldType === "Electrical"
                              ? "Replace"
                              : "New"}
                            &nbsp;Model (.zip file containing .fbx file.)
                          </label>
                          <br />
                          <input
                            label="Upload file"
                            type="file"
                            id="fbxinput"
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
                        type === "Electrical" ||
                        type === "wallpapers"
                      ) && (
                        <div>
                          <label
                            for="Textures"
                            style={{ fontSize: ".9rem", fontWeight: "600" }}
                          >
                            {!(
                              oldType === "furnitures" ||
                              oldType === "appliances" ||
                              oldType === "Electrical"
                            )
                              ? "Replace"
                              : "New"}
                            &nbsp;Textures (.zip or .rar)
                          </label>
                          <br />
                          <input
                            label="Upload file"
                            type="file"
                            id="texinput"
                            onChange={this.texHandle}
                          />
                          {errorTex.length > 0 && (
                            <div className="model__error">{errorTex}</div>
                          )}
                        </div>
                      )}

                      {type === "wallpapers" && (
                        <div>
                          <label for="Textures">
                            Textures (.jpg, .jpeg, .png, .rar)
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
                      {/* <div>
                                                    <label for="Textures">Textures (.zip or .rar)</label>
                                                    <br></br>
                                                    <input label='Upload file'
                                                        type='file'
                                                        onChange={this.texHandle}
                                                    />
                                                {errorTex.length > 0 && <div className='model__error'>{errorTex}</div>}
                                                </div> */}

                      <div>
                        <label
                          for="Preview"
                          style={{ fontSize: ".9rem", fontWeight: "600" }}
                        >
                          Replace Preview Image (.jpg, .jpeg, .png)
                        </label>
                        <br />
                        <input
                          label="Upload file"
                          type="file"
                          id="imginput"
                          onChange={this.imgHandle}
                        />

                        {errorImg.length > 0 && (
                          <div className="model__error">{errorImg}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {uploader === true && (
                <p style={{ textAlign: "center" }}>Updating...</p>
              )}
              <button className="model__uploadBtn" type="submit">
                Update Model
              </button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Download;