/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    
  const [userData, setUserData] = useState({});
  const [addressData, setAddressData] = useState({});
  const [errors, setErrors] = useState({});

    return (
        <InfoContext.Provider value={{userData , setUserData, addressData, setAddressData, errors , setErrors}}>
            {children}
        </InfoContext.Provider>
    );
};

export const UseInformation = () => useContext(InfoContext)