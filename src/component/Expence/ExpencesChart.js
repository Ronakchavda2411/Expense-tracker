import React from "react";
import Chart from "../chart/Chart";

const ExpencesChart = (props) => {
     const chartDataPoints = [
         {lable :'jan' , value: 0},
         {lable :'feb' , value: 0},
         {lable :'mrc' , value: 0},
         {lable :'apr' , value: 0},
         {lable :'may' , value: 0},
         {lable :'jun' , value: 0},
         {lable :'july' , value: 0},
         {lable :'aug' , value: 0},
         {lable :'sep' , value: 0},
         {lable :'oct' , value: 0},
         {lable :'nov' , value: 0},
         {lable :'dec' , value: 0},
     ]
     for(const expence of props.expences){
         const expenceMonth = expence.date.getMonth();
         chartDataPoints[expenceMonth].value += expence.amount; 
     }


    return (
        <Chart dataPoints={chartDataPoints}/>
    )

}
export default ExpencesChart;