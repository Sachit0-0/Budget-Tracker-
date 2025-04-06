import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Summary() {
  const { income, expenses } = useSelector((state: RootState) => state.budget);
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = income - totalSpent;

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p>Total Income: <span className="font-bold">${income}</span></p>
      <p>Total Spent: <span className="font-bold">${totalSpent}</span></p>
      <p>Remaining: <span className={`font-bold ${remaining < 0 ? 'text-red-500' : 'text-green-600'}`}>
        ${remaining}
      </span></p>
    </div>
  );
}
