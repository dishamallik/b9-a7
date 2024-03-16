import propTypes from 'prop-types';

import icon from './assets/icon2.png'
import myIcon from './assets/icon.png'

import { ToastContainer } from 'react-toastify';

const Cards = ({product,handleCart}) => {
    // console.log(handleCart);
    return (
        <div>
            <div> 
            <div className=" card w-96  bg-green-50 shadow-xl  ">
            
         
                             
  <figure className="px-10 pt-10">
    <img src={product.image}/>
  </figure>
  <div className="card-body items-start  text-start">
   <h1>{product.recipe_name}</h1>
   <h5>{product.short_description}</h5>
   <div className="border w-72 border-gray-300  mt-4"></div>
   <h2>Ingredients:{product.ingredients.length}</h2>
   <div>
    <li>{product.ingredients[0]}</li>
    <li>{product.ingredients[1]}</li>
    <li>{product.ingredients[2]}</li>
    <li>{product.ingredients[3]}</li>
    <li>{product.ingredients[4]}</li>

   </div>
   <div className="border w-72 border-gray-300  mt-4"></div>
   <div className='flex gap-5'>
    <div className='flex'>
    <img src={icon} alt="" />
    
        <h3>{product.preparing_time}</h3>

    </div>
    <div className='flex'>
        <img src={myIcon} alt="" />
        <h3>{product.calories}</h3>

    </div>
    
   </div>
   <div>
        <button onClick={(e) =>handleCart(product)} className='btn  btn-accent'>Want to Cook</button>
        <ToastContainer/>
       
    </div>
  </div>
  </div>
  </div>
        </div>
    );
};


Cards.propTypes = {
    product: propTypes.object.isRequired,
}

export default Cards;