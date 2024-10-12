import React from "react";

const ExpenseSummary = ({expenses}) => {

    const total = expenses.reduce((acc, expense) => 
    acc+expense.amount , 0);

    return ( 
        <div>
            <h2>Total Expenses</h2>
            <p>{total.toFixed(2)}</p>
        </div>
    )

}

export default ExpenseSummary;