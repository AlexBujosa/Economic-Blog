import React, { useContext, createContext, useState, useEffect } from 'react'
const AuthContext = createContext();

function setAuthToken(token){
    localStorage.setItem('authToken',token );
}
function setAuthUsername(username){
    localStorage.setItem('username', username);
}
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (username, accessToken ) => {
        setUser({ 'Username': username, 'AccessToken': accessToken })
        setAuthToken(accessToken);
        setAuthUsername(username);
    }

    useEffect(()=>{
        const accessToken = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');
        if(accessToken && username){
            setUser({
                'Username': username, 
                'AccessToken': accessToken
            })
        }
        console.log(accessToken, username)
    },[])

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
} 

export const UserAuth = () => {
    return useContext(AuthContext);
};