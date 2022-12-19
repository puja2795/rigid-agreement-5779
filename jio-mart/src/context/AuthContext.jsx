import React, { useState } from "react";

export const AuthContext = React.createContext();
 
function AuthContextProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);
    const [user,setUser] = useState("");
    const loginUser = () =>{
        setIsAuth(true);
    }

    const logoutUser = () =>{
        setIsAuth(false);
    }

    return(
        <AuthContext.Provider value={{isAuth, user, setUser, loginUser,logoutUser}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;
