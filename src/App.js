import Expenses from "./component/Expenses/Expenses";
//import ExpenseForm from "./component/newExpenses/ExpsenseForm";
import NewExpenses from "./component/newExpenses/newExpenses";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'dh',
      amount: 65,
      date : new Date(2020,7,14)
    },
    {
      id: 'e2',
      title: 'dhvt gf',
      amount: 684,
      date : new Date(2021,5,15)
    },
    {
      id: 'e3',
      title: 'c n n',
      amount: 55,
      date : new Date(2022,6,16)
    },
    {
      id: 'e4',
      title: 'c p n',
      amount: 55,
      date : new Date(2022,5,17)
    }
  ]


  const addExpenseHandler = (expense) => {
    console.log('in App',expense)
  } 

  return (
    <div>
    <NewExpenses onAddExpense = {addExpenseHandler}></NewExpenses>
    <Expenses items={expenses} />
  </div>
  );
}
 
export default App;
