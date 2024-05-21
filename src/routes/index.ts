import { Router } from 'express';
import expenseRoutes from './expenseRoutes';

const router = Router();

router.use('/expenses', expenseRoutes);

export default router;
