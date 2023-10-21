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
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <MyContext.Provider
      value={{
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
      }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
