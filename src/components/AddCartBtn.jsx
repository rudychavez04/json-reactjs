import './AddCartBtn.css';

const AddCartBtn = ({price, name}) => {

  let incrementClick = () =>{

    alert('Haz comprado: '+name+" a S/ "+price)
  }

  return (
   
    <button onClick={incrementClick}>Comprar</button>
  )
}

export  {AddCartBtn}