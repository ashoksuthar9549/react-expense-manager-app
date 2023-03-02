import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 300,
    date: new Date(2023, 2, 28)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 100,
    date: new Date(2022, 9, 18)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 500,
    date: new Date(2023, 2, 19)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 300,
    date: new Date(2023, 3, 1)
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const expenseHandler = (expense)=>{
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }

  return (
    <div>
      <NewExpense onAddExpense={expenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App
