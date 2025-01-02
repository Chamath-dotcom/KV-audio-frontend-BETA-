
import './hero.css';
function Hero() {
  return (
     <div className='hero-div'>
        <img src="./hero_img.svg" alt="" />
        <div className='nav-sec'>
         <img src="./logo.svg" alt="" className='logo'/>
         <div className='acctions'>
            <button className='cart-btn'>
               <img src="cart.svg" alt="" />
            </button>
            <button className='login-btn'>LOGIN</button>
            <button className='profile'>
               <img src="./user-profile-icon.svg" alt="" />
            </button>
          </div>
        </div>
     </div>
  );
}

export default Hero;
