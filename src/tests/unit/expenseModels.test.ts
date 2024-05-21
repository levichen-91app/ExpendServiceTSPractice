import { ExpenseModel, Expense } from '../../models/expenseModel';

describe('ExpenseModel', () => {
  let expenseModel: ExpenseModel;

  beforeEach(() => {
    expenseModel = new ExpenseModel();
  });

  describe('createExpense', () => {
    it('should create a new expense', () => {
      const expense: Expense = {
        id: "1",
        name: 'Test Expense',
        amount: 100,
        date: '2022-01-01',
        category: 'Test Category',
      };

      const createdExpense = expenseModel.createExpense(expense);

      expect(createdExpense).toHaveProperty('id');
      expect(createdExpense.name).toBe(expense.name);
      expect(createdExpense.amount).toBe(expense.amount);
      expect(createdExpense.date).toBe(expense.date);
      expect(createdExpense.category).toBe(expense.category);
    });
  });

  describe('getExpenses', () => {
    it('should return all expenses', () => {
      const expenses: Expense[] = [
        {
          id: '1',
          name: 'Expense 1',
          amount: 100,
          date: '2022-01-01',
          category: 'Category 1',
        },
        {
          id: '2',
          name: 'Expense 2',
          amount: 200,
          date: '2022-01-02',
          category: 'Category 2',
        },
      ];

      expenses.forEach(expense => expenseModel.createExpense(expense));

      const retrievedExpenses = expenseModel.getExpenses();

      expect(retrievedExpenses).toEqual(expenses);
    });
  });

  describe('getExpenseById', () => {
    it('should return the expense with the specified id', () => {
      const expense: Expense = {
        id: '1',
        name: 'Test Expense',
        amount: 100,
        date: '2022-01-01',
        category: 'Test Category',
      };

      expenseModel.createExpense(expense);

      const retrievedExpense = expenseModel.getExpenseById(expense.id);

      expect(retrievedExpense).toEqual(expense);
    });

    it('should return null if the expense with the specified id does not exist', () => {
      const retrievedExpense = expenseModel.getExpenseById('nonexistent-id');

      expect(retrievedExpense).toBeNull();
    });
  });

  describe('updateExpenseById', () => {
    it('should update the expense with the specified id', () => {
      const expense: Expense = {
        id: '1',
        name: 'Test Expense',
        amount: 100,
        date: '2022-01-01',
        category: 'Test Category',
      };

      expenseModel.createExpense(expense);

      const updatedExpense: Expense = {
        id: '1',
        name: 'Updated Expense',
        amount: 200,
        date: '2022-01-02',
        category: 'Updated Category',
      };

      const updatedExpenseResult = expenseModel.updateExpenseById(expense.id, updatedExpense);

      expect(updatedExpenseResult).toEqual(updatedExpense);
    });

    it('should return null if the expense with the specified id does not exist', () => {
      const updatedExpense: Expense = {
        id: 'nonexistent-id',
        name: 'Updated Expense',
        amount: 200,
        date: '2022-01-02',
        category: 'Updated Category',
      };

      const updatedExpenseResult = expenseModel.updateExpenseById('nonexistent-id', updatedExpense);

      expect(updatedExpenseResult).toBeNull();
    });
  });

  describe('deleteExpenseById', () => {
    it('should delete the expense with the specified id', () => {
      const expense: Expense = {
        id: '1',
        name: 'Test Expense',
        amount: 100,
        date: '2022-01-01',
        category: 'Test Category',
      };

      expenseModel.createExpense(expense);

      const deleteResult = expenseModel.deleteExpenseById(expense.id);

      expect(deleteResult).toBe(true);
      expect(expenseModel.getExpenseById(expense.id)).toBeNull();
    });

    it('should return false if the expense with the specified id does not exist', () => {
      const deleteResult = expenseModel.deleteExpenseById('nonexistent-id');

      expect(deleteResult).toBe(false);
    });
  });
});