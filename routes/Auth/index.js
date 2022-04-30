// Libraries:
// • express
import express from 'express';

// Models
import { UserModel } from '../../database/allModels';

// Controllers
import { registerUser, loginUser, getMe } from '../../controllers/authController';

// Middlewares
import { protect } from '../../middleware/authMiddleware';

const Router = express.Router();

Router.post('/register', registerUser);
Router.post('/login', loginUser);
Router.get('/me', protect, getMe);

export default Router;