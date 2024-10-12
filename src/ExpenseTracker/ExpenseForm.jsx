
import React, {useState} from "react";

const ExpenseForm =({onAddExpense}) => {
    const [ description, setDescription] = useState('');
    const [ amount, setAmount] = useState('');
    const [ date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // no reload
        const expense = {description, amount : parseFloat(amount), date};
        onAddExpense(expense);
        setDescription('');
        setAmount('');
        setDate('');

    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description:</label>
                <input 
                type= "text"
                value = {description}
                onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <div>
                <label>Amount:</label>
                <input 
                type= "number"
                value = {amount}
                onChange={(e) => setAmount(e.target.value)} 
                />
            </div>
            <div>
                <label>Date:</label>
                <input 
                type= "date"
                value = {date}
                onChange={(e) => setDate(e.target.value)} 
                />
            </div>
            <button type = "submit">Add Expense</button>
        </form>
    )

}

export default ExpenseForm;