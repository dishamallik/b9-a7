
import './App.css'


import { useEffect } from 'react';
import { useState } from 'react';


import Header from './Component/Header'
import Cards from './Cards';

import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);




    useEffect(() => {
        fetch("../public/fakeData.json")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        });
    }, []);
    const handleCart = (p) => {
      const isExist = cart.find(pd => pd.recipe_id == p.recipe_id);
      if(!isExist) {
        setCart([...cart,p])

      }
      else{
       
          toast("Already the card is exist ")
        
      }


    }
 
const handleDelete = (recipe_id)=>{
  const newCart=cart.filter(item => item.recipe_id != recipe_id);
  setCart(newCart);
}




    //cart part

    const handleCart1 = (c) => {
      console.log(c)

    }
  
  // console.log(cart);
  return (
    <>
    <Header></Header>
    
    


    <div className='container mx-auto'>
            <div className='cards-container flex '>
            
            <div className='container mx-auto grid grid-cols-2  gap-3  mt-20  '>
            {
                products.map((pd) => (
                <Cards key={products.id} product={pd} handleCart={handleCart}></Cards>

                ))
              }
                
</div>
      

{/* cart section */}

<div className='border-2 bg-slate-100'>
<div className='h-auto mt-20 border-2  bg-green-50'>
    <div className='shadow-lg  w-96 '>
    <h1 className='text-center underline mb-5 '>Want to Cook</h1>
    <div className="flex justify-around">
    <h5>Name</h5>
    <h5>Time</h5>
    <h5>Calories</h5>
    </div>

    <div >
      {cart.map((item) => (
        <div className="flex justify-around mt-10 p-5 gap-4 border-2 bg-green-100 ">
          
    <h5>{item.recipe_name}</h5>
    <h5>{item.preparing_time}</h5>
    <button onClick={()=>handleDelete(item.recipe_id)} className="btn btn-accent">Preparing</button>
        </div>
       
      ))}
    </div>
    
    </div>
</div>


{/* 2nd part */}
<div className='border-2 mt-10 h-auto bg-green-100'>
<div className="flex justify-around">
    <h5>Name</h5>
    <h5>Time</h5>
    <h5>Calories</h5>
    </div>


</div>



</div>


</div>






</div>




            
        


      
    </>
  )
}

export default App
