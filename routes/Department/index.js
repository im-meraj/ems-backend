// Libraries:

// • express
import express from 'express';

// Controllers
import { getDepartments, setDepartment, updateDepartment, deleteDepartment } from '../../controllers/departmentController';

// Middlewares
import { protect } from '../../middleware/authMiddleware';

const Router = express.Router();

Router.route('/').get(protect, getDepartments).post(protect, setDepartment);
Router.route('/:id').put(protect, updateDepartment).delete(protect, deleteDepartment);

export default Router;