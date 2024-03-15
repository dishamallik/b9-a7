
import myImage from '../assets/Frame.png';
import myCover from '../assets/cover.png'
const Header = () => {
    return (
        <div>
            {/* navbar */}
     <div className="navbar bg-base-100 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Secret Recipe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
      <a>Recipes</a>
      </li>
      <li><a>about</a></li>
      <li><a>Search</a></li>
    
    </ul>
  </div>
  <div className="navbar-end gap-3">
  <label className="input input-bordered rounded-xl flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
<img src={myImage} alt="" />
  </div>
</div>
{/* navbar end */}

{/* banner section */}

<div className="hero min-h-screen container mx-auto rounded-2xl" style={{backgroundImage:`url(${myCover})` }}>
  <div className="hero-overlay rounded-2xl bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br />
      class tailored for you!</h1>
      <p className="mb-5 "> Whether you’re craving international cuisines or quick and easy meal ideas,  is the place to find what you’re looking for.As the world’s <br/> largest food network, Tasty offers a variety of easy, delicious</p>
      <div className='flex justify-around'>
      <button className="btn btn-accent">Explore Now</button>
      <button className="btn  glass ">Our Suggestion</button>
      </div>
    </div>
  </div>
</div>

{/* banner section  end */}

{/* Our recipe section */}
<div className='text-center mt-10'>
  <div className='text-2xl font-bold'>Our Recipes</div>
  <div>Explore categories like family dinners, work lunches, slow cooker recipes, guides, stories,
    <br/> and more. You can even watch Tasty shows and shop their products</div>
</div>
            
        </div>
    );
};

export default Header;