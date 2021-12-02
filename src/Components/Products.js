import {useParams,useLocation} from 'react-router-dom';
import {Outlet,Link} from 'react-router-dom';

const Products=props=>{
    const params=useParams();   
    const {change}=props;
    change(false); 
   
    
    let name=params.productName;
    switch(name){        
        case 'cpu':
            name='Processors';
            break;
        case 'gpu':
            name="Graphics Cards";
            break;
        case 'memory':
            name="Memory";
            break;
        case 'motherboards':
            name="Motherboards";
            break;
        default:
            name='All';
    };
    return(
        <div className="products-container">
            <div className="menu-list">
                <ul>
                    <li>Shop /</li>
                    <li>{name}</li>
                    <Link to="cpu"><li className="products-li">Processors</li></Link>
                    <Link to="gpu"><li className="products-li">Garphics Cards</li></Link>
                    <Link to="memory"><li className="products-li">Memory</li></Link>
                    <Link to="motherboards"><li className="products-li">Motherboards</li></Link>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Products;