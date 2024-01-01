import { useState } from 'react';
import './ExpenceForm.css';
import React  from "react";

const ExpenceForm = (props) => {
       const [enterdTitle, setEnterdTitle] = useState("");
       const [enterdAmount, setEnterdAmount] = useState("");
       const [enterdDate, setEnterdDate] = useState("");
   
       const titleChangeHandler = (e) => {
        setEnterdTitle(e.target.value);
       
        }
       const AmountChangeHandler = (e) =>{
        setEnterdAmount(e.target.value);
        }
        const DateChangeHandler = (e) =>{
            setEnterdDate(e.target.value);
        }

        const submitHandler=(event) => {
            event.preventDefault();

            const ExpenceData = {
                title : enterdTitle,
                amount :+enterdAmount,
                date :new Date(enterdDate)
            };
            props.onSaveExpenceData(ExpenceData);
            // console.log( ExpenceData);
            setEnterdTitle('');
            setEnterdAmount('');
            setEnterdDate('');
        }
        



    return (
        <form onSubmit={submitHandler}>
            <div className="x">
                <div className="x">
                    <label className="lbl"> Title</label>
                    <input className="input" value={enterdTitle} type="text" onChange={titleChangeHandler} />
                </div>

                <div className="x">
                    <label className="lbl"> Amount</label>
                    <input className="input" value={enterdAmount} type="number" min="0.01" step="0.01" onChange={AmountChangeHandler}/>
                </div>

                <div className="x">
                    <label className="lbl"> Date</label>
                    <input className="input" value={enterdDate} type="date" min="2019-01-01" step="2022-12-31" onChange={DateChangeHandler}/>
                </div>


            </div>

            <div className="action">
                <button type="button" onClick={props.onCancle}>Cancle</button>
                <button type="submit">Add Expence</button>
            </div>
        </form>
    );
}
export default ExpenceForm;