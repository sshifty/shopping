import { HashRouter, Routes, Route } from "react-router-dom";
import React, {useState}from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import Nav from './Components/Nav';
import Products from './Components/Products';
import Item from './Components/Item';
import ListAll from './Components/ListAll';
import ShoppingCart from "./Components/ShoppingCart";







const RouteSwitch = () => {    
    
    const [cart,setCart]=useState({
        items:[]       
    });

    const [total,setTotal]=useState(0);
    const [count,setCount]=useState(0);
    
    const [active,setActive]=useState(true);    

    
    const notify = () => toast.success('Item has been added to your cart!',{
        position:"bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme:'dark'
    });
    const addItem=(item,loc)=>{
        
        let tempTotal=total;
        let dumb=JSON.parse(JSON.stringify(item))
        if(!item.count){
            item.count=0;
        }
        
        if(!cart.items.length){ 
                 
            setCart(prevState=>{
                
                dumb.count=1;
                
                
                return{
                    items:[dumb]                    
                }
            });
            setTotal(item.price);
        }else{
            setCart(prevState=>{  
                
                let tempItems = JSON.parse(JSON.stringify(prevState.items))                                    
                
                let found=false;  
                            
                tempItems.map(tempItem=>{       
                               
                    if(item.id===tempItem.id){                                              
                        found=true;                                             
                        tempItem.count++;                      
                          
                    };
                });
               if(!found){
                  
                   let temp=JSON.parse(JSON.stringify(item));
                   temp.count++;                       
                   tempItems.push(temp);                   
               };
                return{                                  
                    items:tempItems,                    
                };            
            });
            tempTotal+=item.price
            setTotal(
                 tempTotal
            );

        }
        setCount(count+1);
        if(loc==='card'){
            notify();
        }
        
     
    };
    
    
   const deleteItem=item=>{
       let tempTotal=total;
       setCart(prevState=>{
        let tempItems = JSON.parse(JSON.stringify(prevState.items));
        tempItems.map((temp,i)=>{            
            if(temp.id===item.id){
                if(item.count===1){
                    temp.count--;
                    tempItems.splice(i,1);
                    
                }else{
                    temp.count--;

                }
            };
        })
        return {
            items:tempItems
        };  
       });
       tempTotal-=item.price;
       setTotal(tempTotal);
       setCount(count-1);
       
   } 
   
   const changeActive=(cond)=>{
       setActive(cond);
   }
   
   
   
  return (
    <HashRouter>
        
        <ShoppingCart total={total} cart={cart} deleteItem={deleteItem} addItem={addItem}/>
        <Nav count={count} active={active}/>
        <Routes>
            <Route  path="/" element={<App change={changeActive}/>} />
            <Route   path="products" element={<Products change={changeActive}/>}>
                <Route path="" element={<ListAll addItem={addItem}/>}/>            
                <Route 
                    path=":productName" 
                    element={<Item  addItem={addItem}/>}/>
            </Route>
        </Routes>
       <ToastContainer />
    </HashRouter>
  );
};

export default RouteSwitch;