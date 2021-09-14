import { createContext, useState } from "react";







    

const Context = createContext();

const UserProvider = ({children})=>{
 

const [usuario,setUser]= useState({nombre:'cris'})


  async function userF(u){
    setUser(u);
  }



return(
    <Context.Provider value={{usuario, userF}}>

        {children}

    </Context.Provider>
)
}



export {UserProvider}
export default Context