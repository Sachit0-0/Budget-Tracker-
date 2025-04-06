import { useDispatch, useSelector } from 'react-redux';
import { setIncome } from '../redux/budgetSlice';
import type { RootState } from '../redux/store';

export default function IncomeInput() {
  const income = useSelector((state: RootState) => state.budget.income);
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Monthly Income</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => dispatch(setIncome(Number(e.target.value)))}
        className="w-full p-2 border rounded"
        placeholder="Enter your monthly income"
      />
    </div>
  );
}
