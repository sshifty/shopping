import './App.css';
import {Link} from 'react-router-dom';

function App(props) {
  const {change}=props;
  console.log(change)
  change(true)
  return (
    <div className="App">
        <h1 className="main-name">Nvidia GeForce RTX 3090</h1>
        <h3 className="main-title">Now available for preorder, shipping December, 2020.</h3>
        
          <Link to="/products">
            <button className="btn-shop">
              shop now
            </button>
          </Link>
        
        
    </div>
  );
}

export default App;
