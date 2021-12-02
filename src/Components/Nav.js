import {Link} from 'react-router-dom';

import shopIcon from '../images/shopping-cart.png';


const Nav=props=>{
    
    const {active,count}=props;    
    const openCart=()=>{
        const modal=document.querySelector(".modal");
        modal.style.display="block";
    };
    return(
        <div className={active?"trans":"nav-container"}>
            <Link to="/">
                <h1 className="storename">My Store</h1>
            </Link>
            <nav className="nav-items">               
                <Link  className="nav-item home" to="/">Home</Link>
                <Link  className="nav-item" to="/products">Products</Link>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="nav-item" rel="noreferrer">Contact</a>
                <button  className="btn-cart nav-item" onClick={openCart} >
                    <img src={shopIcon} alt="Cart icon" />
                    {count?<div className="bubble">{count}</div>:null}
                    
                </button>
                
            </nav>
            
        </div>
    );
};

export default Nav;