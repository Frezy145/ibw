import '../../styles/Error.css';
import Banner from '../../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';


function Error(){
    return (
        <div>
            <Banner />
            <div className='Error'>
                Ooups ! Something goes wrong, there is an error !
            </div>
            
            
        </div>
    )
}

export default Error;