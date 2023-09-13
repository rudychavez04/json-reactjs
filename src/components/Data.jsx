import './Data.css';
import { AddCartBtn } from './AddCartBtn';
import {Discount} from './Discount';
import {Heart} from './Heart';







const Data = ({discount,name,oldPrice,Price}) => {
  return (
    <>
    <div className='data'>
    <Discount descuento={discount} />
      <Heart />
        <img className='data__img' src='https://picsum.photos/180' alt='data' />
        <h2 className='data__name'>{name}</h2>
        <div className="data__details">
            <p className="data__oldPrice">${oldPrice}</p>
            <p className="data__Price">${Price}</p>
            <AddCartBtn 
            name={name}
            price={Price}
             />
           
        </div>
       

    </div>
    
    </>
  )
}

export  {Data}