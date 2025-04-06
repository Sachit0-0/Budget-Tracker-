import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Expense{
    id: number;
    category : string;
    amount : number;
}

interface BudgetSlice{
    income : number;
    expenses : Expense[];
}

const initialState : BudgetSlice = {
    income: 0,
    expenses: [],
}

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
      setIncome(state, action: PayloadAction<number>) {
        state.income = action.payload;
      },
      addExpense(state, action: PayloadAction<{ category: string; amount: number }>) {
        state.expenses.push({ id: Date.now(), ...action.payload });
      },
      removeExpense(state, action: PayloadAction<number>) {
        state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
      },
    },
  });

export const {setIncome,addExpense,removeExpense} = budgetSlice.actions;
export default budgetSlice.reducer;