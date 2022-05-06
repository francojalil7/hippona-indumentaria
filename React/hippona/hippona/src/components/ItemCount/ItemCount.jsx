import './ItemCount.css'
import React, {useState} from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(1);
    
    const decremento = () => {
        if(count > 0){
            setCount(count - 1);
        }
        
    }
    const incremento = () => {
        setCount(count + 1);

    }

    return (
        <div className="divCount">
            <button onClick={decremento}>-</button>
            <span>{count}</span>
            <button onClick={incremento}>+</button>
        </div>
    )
}

export default ItemCount;