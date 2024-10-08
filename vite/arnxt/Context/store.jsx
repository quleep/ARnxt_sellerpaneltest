import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [categoriesDetails, setCategoriesDetails] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [brandRooms, setBrandRooms] = useState(null);
  const [image, setImage] = useState();
  const [temporgimage, setTempOrgImage] = useState();
  const [nav, setNav] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [subCategorydetails, setSubCategoryDetails] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [wallimagewidth, setWallImageWidth] = useState();
  const [wallimageheight, setWallImageHeight] = useState();
  const [repoitems, setRepoItems] = useState()

  const [uploadfromrepo, setUploadFromRepo] = useState(false)
  const [selectedfilerepo, setSelectedFileRepo] = useState()

  const [repomodal, setRepoModal] = useState(false)
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <MyContext.Provider
      value={{
        selectedfilerepo,
        setSelectedFileRepo,
        uploadfromrepo,
        setUploadFromRepo,
        repoitems,
        setRepoItems,
        repomodal,
        setRepoModal,
        userId,
        setUserId,
        data,
        setData,
        roomData,
        setRoomData,
        categoriesDetails,
        setCategoriesDetails,
        brandsData,
        setBrandsData,
        brandRooms,
        setBrandRooms,
        image,
        setImage,
        temporgimage,
        setTempOrgImage,
        nav,
        setNav,
        subCategory,
        setSubCategory,
        subCategorydetails,
        setSubCategoryDetails,
        finalData,
        setFinalData,
        wallimagewidth,
        setWallImageWidth,
        wallimageheight,
        setWallImageHeight,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
