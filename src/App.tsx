// src/App.tsx
import IncomeInput from './components/IncomeInput';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 px-4 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">💰 Budget Tracker</h1>
      <div className="grid grid-cols-2 gap-4">
        <IncomeInput />
        <ExpenseForm />
      </div>
      <ExpenseList />
      <Summary />
    </div>
  );
}

export default App;

