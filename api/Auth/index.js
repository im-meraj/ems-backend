// Libraries:

// • express
import express from 'express';
// • bcrypt
import bcrypt from 'bcrypt';
// • jsonwebtoken
import jwt from 'jsonwebtoken';


// Models
import { UserModel } from '../../database/allModels';

const Router = express.Router();

/**
Route:      /auth/signup
Method:     POST
Access:     Public
Description: Create a new user
Params:     none
**/

Router.post('/signup', async (req, res) => {
    try {
        const { fullname, email, password } = req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({ email });
        if (checkUserByEmail) {
            return res.status(400).json({
                message: 'Email already exists'
            });
        }

        //hash password
        const salt = await bcrypt.genSalt(8);
        const hashPassword = await bcrypt.hash(password, salt);
        
        //Save to monogoDB
        await UserModel.create({...req.body.credentials, password: hashPassword});

        //generate JWT auth token
        const token = jwt.sign({ user: {fullname,email} }, process.env.JWT_SECRET, { expiresIn: '2d' });

        return res.status(200).json({
            status: 'Signup success',
            token
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
    
});

Router.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    message: 'Email not found'
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    message: 'Password is incorrect'
                });
            }
            //generate JWT auth token
            const token = jwt.sign({ user: {fullname: user.fullname, email: user.email} }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({
                status: 'Login success',
                token
            });
            
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
});

export default Router;