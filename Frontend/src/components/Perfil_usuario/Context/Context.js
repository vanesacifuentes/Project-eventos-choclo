import { createContext, useState } from "react";









const Context = createContext();

const UserProvider = ({ children }) => {


  const [usuario, setUser] = useState({ cedula : 1})


  async function userF(u) {
    let objUsuario = JSON.parse(u)

    console.log(objUsuario)
    if (objUsuario.nombre_usuario == undefined) {
      console.log('sdjsdkj')
      return false

    } else {
      setUser(JSON.parse(u))
      console.log('sdjsdkj')
      return true

    }



  }



  return (
    <Context.Provider value={{ usuario, userF }}>

      {children}

    </Context.Provider>
  )
}



export { UserProvider }
export default Context