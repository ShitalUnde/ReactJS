import ExpenseForm from "./ExpsenseForm";
import './newExpenses.css'

const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enretedExpenseData) => {
            console.log('In new Expense ',enretedExpenseData)

          props.onAddExpense(enretedExpenseData)
    }
 return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
 )
}
 
export default NewExpenses;