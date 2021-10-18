import { createContext, useState } from "react";









const Context = createContext();

const UserProvider = ({ children }) => {

  const [estadoApp,setEstadoApp] = useState(localStorage.getItem('estadoApp'))
  //localStorage.setItem('estadoApp', estadoApp)

  let stringUsuario = localStorage.getItem('usuario')
  const [usuario, setUser] = useState(stringUsuario && JSON.parse(stringUsuario))

  let stringEvento = localStorage.getItem('evento')
  const [evento, setEvento] = useState(stringUsuario && JSON.parse(stringEvento))





  function isObjetoVacio(obj) {//valida si un objeto esta vacio :: retorna true o false
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  function setearEvento(evento) {
    localStorage.setItem('evento', JSON.stringify(evento))
    setEvento(evento)
  }


  function setearEstadoApp(estado) {
    localStorage.setItem('estadoApp', estado)
    setEstadoApp(estado)
  }



  async function userF(u) {

    let objUsuario = JSON.parse(u)


    if (isObjetoVacio(objUsuario)) {
      return false

    }
     else {
      console.log(objUsuario.username)
      if(objUsuario.username === 'admin'){
        
        localStorage.setItem('estadoApp','admin')
      }else {
        localStorage.setItem('estadoApp','user')
        localStorage.setItem('usuario', JSON.stringify(objUsuario))
      }
      
      return true
    }
  }



  return (
    <Context.Provider value={{ usuario, userF, evento, setearEvento, estadoApp, setearEstadoApp }}>

      {children}

    </Context.Provider>
  )
}



export { UserProvider }
export default Context