import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter()})
expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}))

import Registro from '../components/Perfil_usuario/Registro/register_user'
import { shallow } from 'enzyme'

describe('Pruebas sobre el componente Login usuario', ()=>{

    //Snapshot
    test('Probando con enzyme', ()=>{
        const wrapper = shallow(<Registro/>)
        expect(wrapper).toMatchSnapshot()
    })



    
})