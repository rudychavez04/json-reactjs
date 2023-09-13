
import './Discount.css';

const Discount = (props) => {
  return (
    <div className='discount'>
        {props.descuento}%
    </div>
  )
}

export  {Discount}