import { DataContainer } from './components/DataContainer';
import { Data } from './components/Data';

 import data from './data.json';


import './index.css'

const App = () => {
    return (


        <DataContainer>

            {data.map( product =>
                <Data
                    key={product.name}
                    name={product.name}
                    discount={product.discount}
                    oldPrice={product.oldPrice}
                    Price={product.oldPrice-((product.discount*product.oldPrice)/100)}
                />
            )}

        </DataContainer>

      

    )
}

export { App }