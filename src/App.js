import Expenses from "./component/Expenses";

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
  return (
    <div>
    <h2>Let's get started!</h2>
    <Expenses items={expenses} />
  </div>
  );
}

export default App;
