import '../../styles/Home.css';
import Board from '../../components/Board';
import Banner from '../../components/Banner';
import {Background} from '../../utils/styles/Atoms'

import image from "../../assets/img/image1.jpg";


function Home(){
    
    return (
        <Background image={image}>
            <Banner />
            <Board placeholder='TALK TO AN EXPERT' link='error' label='
                We keep your finance order so you can run your business
            '/>
        </Background>
    )
}

export default Home;