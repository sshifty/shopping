
const Card=props=>{
    
    const {title,price,image}=props.infos;
    const {addItem}=props;    
    return(
        <div className="card">
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <div className="infos">
                <h4>{title}</h4>
                <p>${price}</p>                
            </div>
            <div className="btn-container">
                <button onClick={addItem.bind(this,props.infos)} className="btn-add">Add to cart</button>

            </div>
            
            
        </div>
    );
};

export default Card;