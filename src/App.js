import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Resident tax",
      amount: 50000,
      date: new Date(2023, 2, 30),
    },
    {
      id: 2,
      title: "Bread",
      amount: 100,
      date: new Date(2023, 3, 1),
    },
    {
      id: 3,
      title: "Lunch",
      amount: 680,
      date: new Date(2023, 3, 1),
    },
    {
      id: 4,
      title: "Toilet paper",
      amount: 600,
      date: new Date(2023, 2, 30),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
