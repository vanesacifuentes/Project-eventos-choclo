import Enzyme, { ShallowWrapper,mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

import LoginUser from '../components/perfil_usuario/Login/login-user'
//import Context from '../components/perfil_usuario/Context/Context'
//import App from '../index'
import React, { useContext } from 'react';
import { shallow } from 'enzyme'
import { Router, Switch } from 'react-router'
import Register_User from '../components/Perfil_usuario/Registro/register_user'
import Context from '../components/Perfil_usuario/Context/Context'
import App from '../App'
import { UserProvider } from '../components/Perfil_usuario/Context/Context'

describe('Pruebas sobre el componente Login usuario', () => {

    //Snapshot
    /*test('Probando con enzyme', ()=>{
        const wrapper = shallow(<LoginUser/>)
        expect(wrapper).toMatchSnapshot()
    })*/

    const wrapper = mount(
    
        <UserProvider>

            <App inicio={<LoginUser/>}/>
        </UserProvider>
       
 
        
    )

    test('Verificar mensajes de error en input usuario', () => {
        
        expect(wrapper).toMatchSnapshot()
        const input = wrapper.find('#usuario').simulate('change', { target: { name: 'usuario' , value: 'Hello' } })
        
        console.log(wrapper.debug())
        //expect(input.debug()).toEqual('Hello')

        wrapper.find('#boton1').simulate('click')
        
            expect(wrapper.find('.invalid-feedback').at(0).text()).toEqual('Ingrese el usuario')
            expect(wrapper.find('.invalid-feedback').at(1).text()).toEqual('Ingrese la contraseña')

       // }
        
    })

   // test('Verificar mensajes de error en input contrasena', ()=>{
        //expect(wrapper).toMatchSnapshot()
        //const botonIngresar = wrapper.find('#boton1').simulate('click')
        

    //})


})
