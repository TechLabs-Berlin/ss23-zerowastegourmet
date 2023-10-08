import React, { useState, useEffect } from "react";
<<<<<<< HEAD
// so jin added the line below
import { createContext } from "react";
=======
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302
import axios from "axios";
const API_URL = "http://localhost:2000";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

<<<<<<< HEAD

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  }

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      axios.get(
        `${API_URL}/verify`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }

  const removeToken = () => {
    localStorage.removeItem("authToken");
  }


  const logOutUser = () => {
    removeToken();
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, []);


  return (
    <AuthContext.Provider
      value={{
=======
  
  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  }  

  const authenticateUser = () => {         
    const storedToken = localStorage.getItem('authToken');
    
    if (storedToken) {
      axios.get(
        `${API_URL}/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        const user = response.data;       
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);        
      })
      .catch((error) => {      
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }

  const removeToken = () => {                  
    localStorage.removeItem("authToken");
  }
 
 
  const logOutUser = () => {
    removeToken();   
    authenticateUser();
  }  
  
  useEffect(() => {  
    authenticateUser();            
  }, []);

  
  return (                                                   
    <AuthContext.Provider 
      value={{ 
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
<<<<<<< HEAD
        logOutUser
=======
        logOutUser         
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
