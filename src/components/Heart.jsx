import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {useState, useEffect} from 'react';

import './Heart.css'


const Heart = () => {

    const [like,setLike] = useState(false)
    

    useEffect(() => {


        //Llamamos aqui la API

        console.log("El valor es: "+like)


    }, [like]);

    const handleClick = () =>{

        like == true ? setLike(false) : setLike(true)

    }

    return (
        
            <div className='heart' onClick={handleClick}>

                {like==true ? <AiFillHeart /> : <AiOutlineHeart />}
            
           
            </div>
            
      
    )
}

export { Heart }