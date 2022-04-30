// Libraries:

// • express
import express from 'express';

// Controllers
import { getEmployees, setEmployee, updateEmployee, deleteEmployee } from '../../controllers/employeeController';

// Middlewares
import { protect } from '../../middleware/authMiddleware';

const Router = express.Router();

Router.route('/').get(protect, getEmployees).post(protect, setEmployee);
Router.route('/:id').put(protect, updateEmployee).delete(protect, deleteEmployee);

export default Router;