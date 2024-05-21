// this is the controller for the expense model
// it should have all the functions that are related to the expense model

import { Request, Response } from 'express';
import { ExpenseModel } from '../models/expenseModel';

const expenseModel = new ExpenseModel();

export const createExpense = (req: Request, res: Response) => {
    const expense = expenseModel.createExpense(req.body);
    res.status(201).json(expense);
};

export const getExpenses = (req: Request, res: Response) => {  
    const expenses = expenseModel.getExpenses();
    res.json(expenses);
}

export const getExpenseById = (req: Request, res: Response) => {
    console.log(req.params.id);
    const expense = expenseModel.getExpenseById(req.params.id);
    if (!expense) {
        res.status(404).send('Expense not found');
        return;
    }
    res.json(expense);
}

export const updateExpenseById = (req: Request, res: Response) => {
    const expense = expenseModel.updateExpenseById(req.params.id, req.body);
    if (!expense) {
        res.status(404).send('Expense not found');
        return;
    }
    res.json(expense);
}

export const deleteExpenseById = (req: Request, res: Response) => {
    const result = expenseModel.deleteExpenseById(req.params.id);
    if (!result) {
        res.status(404).send('Expense not found');
        return;
    }
    res.status(204).send();
}   