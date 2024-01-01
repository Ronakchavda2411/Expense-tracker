import React,{useState} from "react";
import './NewExpence.css';
import ExpenceForm from './ExpenceForm';

const NewExpence=(props)=>{
   const [isEditing, setIsEditing] = useState(false);


        const SaveExpenceDataHandler = (enteredExpenceData) => {
            const ExpenceData = {
                ...enteredExpenceData,
                id: Math.random().toString()
            };
          props.onAddExpence(ExpenceData);
          setIsEditing(false);
        }

        const StartEditingHandler = () => {
            setIsEditing(true);
        }
        const StopEditingHandler = () => {
            setIsEditing(false);
        }
       
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={StartEditingHandler}>Add Expence</button>}
            {isEditing && <ExpenceForm onSaveExpenceData={SaveExpenceDataHandler} onCancle={ StopEditingHandler}/>}
        </div>
    );
}
export default NewExpence;