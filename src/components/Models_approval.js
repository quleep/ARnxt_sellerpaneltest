import React, {useEffect, useState} from 'react'
import axios from 'axios'
import url from "../serverURL"
import '../css/approvemodels.css'

function Models_approval() {

    // states
    const [models, setModels] = useState([])
    const [index, setIndex] = useState(0)
    const [approvedModels, setApprovedModels] = useState([])

    // lifecycle events
    useEffect(() => {
        let token = sessionStorage.getItem("token");
        let limit = 40
        axios.get(`${url}/admin/hiddenmodels/${token}/${limit}/${index}`)
        .then((response) => {
            let modelsRes = [...models, ...response.data.modelArr]
            setModels(modelsRes)
            setIndex(limit+index)
                      {console.log(modelsRes)}
                      })
        .catch((err) => console.log(err))
    }, [])


    // member function
  const approve = (modelId, userId) => {
    let model = {
      modelId,
      userId
      }
        if(approvedModels===10){
            console.log("Max limit reached");
        }
        else if (typeof(approvedModels.find(model => model.modelId === modelId))==="object") {
          let updateApproved = approvedModels.filter(
            (model) => model.modelId !== modelId
          );
          setApprovedModels(updateApproved);
        } else {
          // console.log(typeof({}));
          let addApproveModels = [...approvedModels, model];
          setApprovedModels(addApproveModels);
          console.log(approvedModels);
        }
    }

    const confirmApprove = () => {
      let token = sessionStorage.getItem("token");
      if (approvedModels.length <= 0)
        alert("No models selected")
      else
        axios
          .post(`${url}/admin/approvemodels`, { token:token, approvemodels: approvedModels })
          .then((res) => {
            if (res.data.success)
              window.location.reload()
          } 
          )
          .catch((err) => console.log(err));
    }


    // component return function
    return (
      <div className="text-center d-flex flex-column">
        <h3>Approve Models</h3>
        <div>
          <button
            className="model__uploadBtn text-center"
            onClick={()=>confirmApprove()}
          >
            Approve
          </button>
        </div>
        <div className="models_list col-10 pointer mx-auto d-flex flex-wrap">
          {(models.length !== 0) ? (
            
              models.map((model, index) => (
                <div key={model.modelId} className="model" id={model.modelId}>
                  <input
                    type="checkbox"
                    className="model__approve"
                    onClick={() => approve(model.modelId, model.userId)}
                  />
                  <img className="model__img" src={`${model.previewLocation}`} />
                  <h3 className="model__name">{model.modelName}</h3>
                </div>
              ))
            ) : (<div className="mx-auto my-5">All models are approved!</div>)}
        </div>
      </div>
    );
};

export default Models_approval
