// this is a expense model, which is used to create a new expense object
// and also to define the schema for the expense object
// and store data in memory (with array)
// and also to perform CRUD operations on the expense object

import { v4 as uuidv4 } from 'uuid';

export interface Expense {
    id: string;
    name: string;
    amount: number;
    date: string;
    category: string;
}

export class ExpenseModel {
    private expenses: Expense[] = [];

    public createExpense(expense: Expense): Expense {
        const newExpense = { ...expense };
        this.expenses.push(newExpense);

        return newExpense;
    }

    public getExpenses(): Expense[] {
        return this.expenses;
    }

    public getExpenseById(id: string): Expense | null {
        return this.expenses.find(expense => expense.id === id) || null;
    }

    public updateExpenseById(id: string, expense: Expense): Expense | null {
        const index = this.expenses.findIndex(expense => expense.id === id);
        if (index === -1) {
            return null;
        }
        this.expenses[index] = { ...expense, id };
        return this.expenses[index];
    }

    public deleteExpenseById(id: string): boolean {
        const index = this.expenses.findIndex(expense => expense.id === id);
        if (index === -1) {
            return false;
        }
        this.expenses.splice(index, 1);
        return true;
    }
}
