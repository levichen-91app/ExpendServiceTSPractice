// this is the route for the expense model
// it should deal with all the routes that are related to the expense model
// there are 5 APIs in this route, create, delete, update, and get all expenses, get expense by id
// each API should have a corresponding controller function in the controller folder

import { Router } from 'express';
import { createExpense, deleteExpenseById, getExpenseById, getExpenses, updateExpenseById } from '../controllers/expenseController';

const route = Router();

route.post('/', createExpense);
route.get('/', getExpenses);
route.get('/:id', getExpenseById);
route.delete('/:id', deleteExpenseById);
route.put('/:id', updateExpenseById);

export default route;