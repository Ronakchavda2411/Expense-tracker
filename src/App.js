
import './App.css';
import Expenceitem from './component/Expence/Expenceitem';
import NewExpence from './component/NewExpence/NewExpence';
import { useState } from 'react';
import NewcomponentExpence from "./component/Expence/NewcomponentExpence";
import Todo from './Todo';
import Demo from './demo';


const DummyExpence = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];



const App=() => {
  // array of expense 
  const [expences, setExpences] = useState(DummyExpence)
  

  const AddExpenceData=(expence) =>{
    setExpences(prevExpence => {
      return(
        [expence ,...prevExpence]
      )
    });
    console.log(expence)
  };


  return (
    <div className="App">
      <NewExpence onAddExpence={AddExpenceData}  />

      
      <NewcomponentExpence items={expences} />


      {/* <Todo/> */}
{/* <Demo /> */}
    </div>
  );
}

export default App;
