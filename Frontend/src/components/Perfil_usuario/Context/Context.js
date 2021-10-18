import { createContext, useState } from "react";









const Context = createContext();

const UserProvider = ({ children }) => {


  let stringUsuario = localStorage.getItem('usuario')

  const [usuario, setUser] = useState(stringUsuario && JSON.parse(stringUsuario))

  const [evento, setEvento] = useState({})

  function isObjetoVacio(obj) {//valida si un objeto esta vacio :: retorna true o false
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  function setearEvento(evento) {
    console.log('setEvento')
    setEvento(evento)
  }
  async function userF(u) {

    let objUsuario = JSON.parse(u)


    if (isObjetoVacio(objUsuario)) {
      return false

    } else {
      localStorage.setItem('usuario', JSON.stringify(objUsuario))
      return true
    }
  }



  return (
    <Context.Provider value={{ usuario, userF, evento, setearEvento }}>

      {children}

    </Context.Provider>
  )
}



export { UserProvider }
export default Context