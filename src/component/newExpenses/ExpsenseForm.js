import './ExpenseForm.css'

const ExpenseForm = (props) => {

 return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>TItle</label>
                <input type="text"/>
            </div>
            <div className='new-expense__control'>
                <label>Number</label>
                <input type="number"/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date"/>
            </div>            
        </div>
        <div className='new-expense__actions'>
            <button type='submit'> Add Expense</button>
        </div>
    </form>
 )
}

export default ExpenseForm