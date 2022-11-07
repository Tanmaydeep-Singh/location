import React, { useContext, useState }from 'react'
import { auth } from '../firebase';

const Autcontext = React.createContext()

export function useaut(){
    return useContext(Autcontext);
}

export  function autprovider({children}) {
 const [curruser,setcurruser] = useState();

 function signup(email,password) {

   
    auth.createUserWithEmailAndPassword()
    
 }

 const value = {
    curruser
 }

  return (
    <Autcontext.Provider value={value}>
        {children}
    </Autcontext.Provider>
  )
}
