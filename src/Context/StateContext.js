import React, { createContext } from "react";

export const StateContext = createContext({
  userInfo: {},
  setUserInfo: ()=> {},
});

const SetContext = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState({});

  return (

      <StateContext.Provider
        value={{
          userInfo,
          setUserInfo,
        }}
      >
        {children}
      </StateContext.Provider>
   
  );
};

export default SetContext;
