import Enzyme, { ShallowWrapper } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createSerializer } from 'enzyme-to-json'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))


import Context from "../components/perfil_usuario/Context/Context"
import Register_User from '../components/Perfil_usuario/Registro/register_user'





describe('Pruebas sobre el componente Login usuario', () => {

    //Snapshot
    /*test('Probando con enzyme', ()=>{
        const wrapper = shallow(<LoginUser/>)
        expect(wrapper).toMatchSnapshot()
    })*/

    test('Verificar mensajes de error en inputs', () => {
        //const wrapper = shallow(<Context.Provider />)
        //const wrapperApp = shallow(wrapper) 
        //expect(wrapper).toMatchSnapshot()
        //console.log(wrapper.debug())
        //expect(wrapper.find('.invalid-feedback').length).toBe(2); 

        //expect(wrapper.find(<App />

        
        //).length).toBe(2);

    })})