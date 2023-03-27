import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../serverURL";
import "../css/approvemodels.css";

function Add_tag() {
    const [tag, setTag] = useState("")
    const [errorTag, setErrorTag] = useState("")
    const [tags, setTags] = useState([])

    const tagHandle = (e) => {
        setTag(e.target.value);
        setErrorTag('')
    }

    const addTag = (e) => {
        e.preventDefault()
        if (tags.indexOf(tag) !== -1)
            setErrorTag("Tag already exist!")
        else {
            const token = sessionStorage.getItem("token");
            axios
              .post(`${url}/admin/addtag`, { token, tag })
                .then((res) => {
                    if (res.data.success){
                        setTags([...tags, tag])
                        setTag('')
                    }
              })
              .catch((err) => console.log(err));
        }
    }

    useEffect(() => {
      axios
        .get(`${url}/model/tags`)
        .then((res) => setTags(res.data.tags))
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className="App">
      <div className="text-center d-flex flex-column">
        <div className="model__formDiv">
          <h3 className="model__fromHeading">ADD TAG</h3>

          <form className="model__form" onSubmit={(e)=>addTag(e)}>
            <div className="model__inputDiv">
              <input
                type="text"
                placeholder="Tag"
                className="model__input"
                value={tag}
                onChange={(e) => tagHandle(e)}
                required
              />
            </div>
            {errorTag.length > 0 && (
              <div className="model__error">{errorTag}</div>
            )}
            <button className="model__uploadBtn" type="submit">
              Add Tag
            </button>
          </form>
        </div>
        <h3>Tags</h3>
        <div className="models_list col-10 pointer mx-auto d-flex flex-wrap">
          {tags.map((tag, index) => (
            <div className="tag tags_bg px-3 mx-1 my-1 py-2">
              {tag}
              {/* <span
                className="pl-3 pointer"
                onClick={() => this.removeTag(tag)}
              >
                &#10006;
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Add_tag;
