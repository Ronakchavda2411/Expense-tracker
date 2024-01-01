import React,{useState} from 'react';

import './ExpensesFilter.css'

const ExpenceFilter = (props) => {
  
    // const [newYear, setNewYear] = useState("")
  const DropDownChangeHandler = (e) => {
    // console.log(e.target.value);
    props.onfilterChangeHandler(e.target.value);

  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className="label">Filter by year</label>
        <select value={props.selected} onChange={ DropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>

    </div>
  );
};

export default ExpenceFilter;