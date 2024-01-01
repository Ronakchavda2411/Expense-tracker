import react from 'react';
import Expenceitem from "./Expenceitem";
import './ExpencesList.css';


const ExpencesList = (props) => {
    if(props.items.length == 0 ){
        return  <h2 className="expenses-list__fallback ">There Is No Item</h2>;
    }
    return (
        <ul className="expenses-list">
            {  props.items.map((expence) => (<Expenceitem 
            key={expence.id}
            title={expence.title}
            amount={expence.amount}
             date={expence.date} 
             />
           ))
            }
        </ul>
    )
         
};
export default ExpencesList;