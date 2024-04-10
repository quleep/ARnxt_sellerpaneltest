import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function UpholstryMobile() {
  const [data, setData] = useState(null);
  const history = useHistory();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getupholsterydata"
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const nextPage = (itemname) => {
    const separator = "_"; // You can change this to any symbol you prefer
    const url = `/arView/upholstry/${param.id}${separator}${itemname}`;

    history.push(url, {
      state: { itemname: itemname, paramId: param.id },
    });
  };

  return (
    <>
      <div className="hero_container">
        <div className="demo-container">
          <div className="room-container">
            <div className="subtitle">
              Choose the type of sofa for upholstery:
            </div>
            <div className="room-select">
              {data &&
                data.map((item) => (
                  <div className="room" onClick={() => nextPage(item.itemname)}>
                    <div className="image">
                      <img src={item.imageurl} alt="room" />
                    </div>

                    <div className="label">{item.type}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpholstryMobile;
