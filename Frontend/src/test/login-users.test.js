import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter()})
expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}))

import LoginUser from '../components/Login/login-user'
import { shallow } from 'enzyme'

describe('Pruebas sobre el componente Login usuario', ()=>{

    //Snapshot
    test('Probando con enzyme', ()=>{
        const wrapper = shallow(<LoginUser/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('Verificar mensajes de error en inputs', ()=>{
        const wrapper = shallow(<LoginUser/>)
        console.log(wrapper.debug())
        expect(wrapper.find('.invalid-feedback').length).toBe(2);
      
    })

    /*test('Verificar boton 1', ()=>{
        const wrapper = shallow (<LoginUser/>)
        const boton1 = wrapper.find('#boton1').at(0).simulate('click')
        expect(boton1).toBeDefined();

    })*/

    
})
