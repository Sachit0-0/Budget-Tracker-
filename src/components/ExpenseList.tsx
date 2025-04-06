import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeExpense } from '../redux/budgetSlice';

export default function ExpenseList() {
  const expenses = useSelector((state: RootState) => state.budget.expenses);
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Expenses</h2>
      {expenses.length === 0 && <p className="text-gray-500">No expenses yet.</p>}
      {expenses.map((exp) => (
        <div key={exp.id} className="flex justify-between items-center p-2 border rounded mb-2">
          <span>
            {exp.category} - <span className="font-semibold">${exp.amount}</span>
          </span>
          <button
            onClick={() => dispatch(removeExpense(exp.id))}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
