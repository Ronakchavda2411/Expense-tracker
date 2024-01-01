import React, { useState } from "react";
import Expenceitem from './Expenceitem'
import './NewcomponentExpence.css';
import Card from "../UI/Card";
import ExpenceFilter from './ExpenceFilter';
import ExpencesList from "./ExpencesList";
import ExpencesChart from './ExpencesChart';


const NewcomponentExpence = (props) => {
    const [filteredyear, setFilteredyear] = useState(2020);

    const filterChangeHandler = (SelectedYear) => {
        setFilteredyear(SelectedYear);

    }

    const filterdExpence =props.items.filter(expence => {
        return expence.date.getFullYear().toString() === filteredyear;
    });

    // let expencesContent = <p>There Is No Item</p>;
    // if(filterdExpence.length > 0){
    //     expencesContent = filterdExpence.map((expence) => (<Expenceitem 
    //         key={expence.id}
    //         title={expence.title}
    //         amount={expence.amount}
    //          date={expence.date} 
    //          />
    //        ))
    // }


    return (
       <div><Card className="expenses">
            <ExpenceFilter selected={filteredyear} onfilterChangeHandler={filterChangeHandler} />

          <ExpencesChart expences={filterdExpence}/>
         <ExpencesList  items={filterdExpence}/>
          
          
          
          
          
          
          
          
            {/* {filterdExpence.length === 0 && <p>There Is No Item</p>}
            {filterdExpence.length > 0 &&
            filterdExpence.map((expence) => (<Expenceitem 
             key={expence.id}
             title={expence.title}
             amount={expence.amount}
              date={expence.date} 
              />
            ))} */}


            {/* <Expenceitem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <Expenceitem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <Expenceitem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <Expenceitem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
        </Card>
        </div> 
    );


}
export default NewcomponentExpence;