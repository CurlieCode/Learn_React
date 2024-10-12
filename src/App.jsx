// An expense tracker app where users can input their expenses and see a summary. This project will cover forms, state management, and possibly local storage.
//Multiple Components
// ExpenseForm , ExpenseList , ExpenseSummary , ExpenseIndex


//localStorage in React is part of the Web Storage API that allows you to store data in the user's browser persistently, even after the page is refreshed or the browser is closed. The data stored in localStorage is available across browser sessions, making it useful for saving small amounts of data without needing a backend.
import ExpenseIndex from "./ExpenseTracker/ExpenseIndex";
function App() {
  return <ExpenseIndex/>
}

export default App;
