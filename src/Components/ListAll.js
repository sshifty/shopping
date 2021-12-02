
import cpu from '../Products/cpu.json';
import gpu from '../Products/gpu.json';
import memory from '../Products/memory.json';
import motherboards from '../Products/motherboards.json';
import Card from './Card';

const ListAll=props=>{
    const {addItem}=props;  
       
    let items=[
        cpu,
        gpu,
        memory,
        motherboards
    ]
    
    return (
        <div className="items">
            {items.map(type=>{
               return type.map((item,i)=>{
                    return <Card key={i} addItem={addItem} infos={item}/>
                })
            })}
        </div>
    );
};

export default ListAll;