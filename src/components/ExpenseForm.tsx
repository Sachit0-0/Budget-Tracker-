import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/budgetSlice';
import { useRef } from 'react';

export default function ExpenseForm() {
  const dispatch = useDispatch();
  const categoryRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const category = categoryRef.current?.value || '';
    const amount = Number(amountRef.current?.value);

    if (!category || !amount) return;

    dispatch(addExpense({ category, amount }));

    if (categoryRef.current) categoryRef.current.value = '';
    if (amountRef.current) amountRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Add Expense</h2>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          ref={categoryRef}
          type="text"
          placeholder="Category"
          className="p-2 border rounded w-full"
        />
        <input
          ref={amountRef}
          type="number"
          placeholder="Amount"
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </form>
  );
}
