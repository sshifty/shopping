
const ShoppingCart=props=>{
    const modal=document.querySelector(".modal")
    const {cart,addItem,deleteItem,total}=props;
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    const closeCart=()=>{
        const modal=document.querySelector(".modal");
        modal.style.display="none";
    }
    return (
      <div className="modal" >
        <div class="modal-content">
            <div className="modal-body">
                <h1>Your Shopping Cart</h1>
                <div className="cart-body">
                  {cart.items.map(item=>{
                      return (
                        <div className="cart-items">
                          <div className="cart-img">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="cart-item-infos">
                            <h4>{item.title}</h4>
                            <p>${item.price*item.count}</p>
                            <div className="cart-item-count">
                              <button onClick={deleteItem.bind(this,item)} class="btn-count">&minus;</button>
                              <p className="p-count">{item.count}</p>
                              <button onClick={addItem.bind(this,item,"cart")} class="btn-count">+</button>
                            </div>
                          </div>
                        </div>
                      );
                  })}

                </div>
                <h2 className="total">Total: ${total}</h2>
                <button className="btn-modal btn-check">Checkout</button>
                <button onClick={closeCart} className="btn-modal btn-close">Close</button>
            </div>
        </div>
       
      </div>
    );
};

export default ShoppingCart;