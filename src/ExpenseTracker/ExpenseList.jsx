import React from "react"

const ExpenseList = ({expenses}) => {
    return(
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.length > 0 ? (
                    expenses.map((expense, index) => (
                        <li key = {index}>
                            {expense.description} - {expense.amount.toFixed(2)} on {expense.date}
                        </li>
                    ))
                ) : (
                    <p> No Expense Added yet</p>
                )
                }
            </ul>
        </div>
    )


}

export default ExpenseList;