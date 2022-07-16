import '../../styles/Error.css';
import OffCanv from '../../components/OffCanv';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BsArrowRight} from 'react-icons/bs'

function Error(){
    return (
        <div>
            <div className='Error'>
                Ooups ! Il y a une erreur
            </div>
            <span>{BsArrowRight}</span>
        </div>
    )
}

export default Error;