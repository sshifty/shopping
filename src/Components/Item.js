import {useParams} from 'react-router-dom';
import cpu from '../Products/cpu.json';
import gpu from '../Products/gpu.json';
import memory from '../Products/memory.json';
import motherboards from '../Products/motherboards.json';
import Card from './Card';

const Item=props=>{
    const {addItem}=props;
    let params=useParams();
    let {productName}=params;    
    let items={
        cpu,
        gpu,
        memory,
        motherboards
    }
    
    return (
        <div className="items">
            {items[productName].map((item,i)=>{
                return <Card key={i}  addItem={addItem} infos={item}/>
            })}
        </div>
    );
};

export default Item;