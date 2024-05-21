import { ExpenseModel, Expense } from '../../models/expenseModel';
import request from 'supertest';
import app from '../../app';

describe('Expense API', () => {
    let expenses: Expense[] = []; 
    beforeEach(() => {
        expenses.length = 0; 
    });

    test('Should list all of expense', async () => {
        const response = await request(app)
            .post('/api/expenses')
            .send({
                id: "1",
                date: '2023-05-21',
                name: 'Lunch',
                amount: 15.5,
                category: 'Food'
            });
        
        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: "1",
            date: '2023-05-21',
            name: 'Lunch',
            amount: 15.5,
            category: 'Food'
        });
    });

    test('Should delete expense', async () => {
        const addResponse = await request(app)
            .post('/api/expenses')
            .send({
                id: "1",
                date: '2023-05-21',
                name: 'Lunch',
                amount: 15.5,
                category: 'Food'
            });

        const { id } = addResponse.body;

        const deleteResponse = await request(app).delete(`/api/expenses/${id}`);

        expect(deleteResponse.status).toBe(204);
    });

    test('Shoule update expense', async () => {
        const addResponse = await request(app)
            .post('/api/expenses')
            .send({
                id: '1',
                date: '2023-05-21',
                name: 'Lunch',
                amount: 15.5,
                category: 'Food'
            });

        const { id } = addResponse.body;

        const updateResponse = await request(app)
            .put(`/api/expenses/${id}`)
            .send({ name: 'Dinner', amount: 20 });

        expect(updateResponse.status).toBe(200);
    });

    test('Should list all of expenses', async () => {
        const addResponse = await request(app)
            .post('/api/expenses')
            .send({
                id: '1',
                date: '2023-05-21',
                name: 'Lunch',
                amount: 15.5,
                category: 'Food'
            });

        const listResponse = await request(app).get('/api/expenses');

        expect(listResponse.status).toBe(200);
        // expect(listResponse.body).toEqual([addResponse.body]);
    });

    test('Shoule get single expense', async () => {
        const addResponse = await request(app)
            .post('/api/expenses')
            .send({
                id: '1',
                date: '2023-05-21',
                name: 'Lunch',
                amount: 15.5,
                category: 'Food'
            });

        const { id } = addResponse.body;

        const getResponse = await request(app).get(`/api/expenses/${id}`);

        expect(getResponse.status).toBe(200);
        // expect(getResponse.body).toEqual(addResponse.body);
    });
});
