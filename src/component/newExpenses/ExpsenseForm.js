import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setUserInput((preState) => {
        return {
            ...preState,
            enteredTitle: event.target.value,
        }
    })
  };

  const AmountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    setUserInput((preState) => {
        return {
            ...preState,
            enteredAmount: event.target.value,
        }
    })
  };

  const DateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    setUserInput((preState) => {
        return {
            ...preState,
            enteredDate: event.target.value,
            // enteredDate:  new Date(event.target.value),
        }
    })
  };


  const submitHandler = (event) => {
        event.preventDefault()

        userInput.enteredDate =  new Date(userInput.enteredDate)

        const expenseData = {
            id: Math.random().toString(),
             ...userInput,
            // title : userInput.enteredTitle,
            // amount: userInput.enteredAmount,
           // date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        // console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>TItle</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Number</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
