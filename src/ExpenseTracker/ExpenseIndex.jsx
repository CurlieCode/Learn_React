import React, {useEffect, useState} from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const ExpenseIndex = () => {
    const [expenses, setExpenses] = useState('');

    //load data from storage
    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(savedExpenses)

    }, []);
    


    //store data to storage
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))

    }, [expenses])

    const addExpense = (expense) => {
        setExpenses([...expenses,expense])
    }

    return (
        <div> 
            <h1>Expense Tracker</h1>
            <ExpenseForm onAddExpense={addExpense}/>
            <ExpenseSummary expenses = {expenses}/>
            <ExpenseList expenses = {expenses}/>
        </div>
    )

}

export default ExpenseIndex