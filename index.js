import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

//Environment Configuration
dotenv.config();

const port = process.env.PORT || 4000;

//Database connection
// import ConnectDB from './database/connection';
import connectDB from './config/db';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}));
app.use(helmet());

//Routes
import authRoutes from './routes/Auth';
import employeeRoutes from './routes/Employee';
import departmentRoutes from './routes/Department';

app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/department", departmentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});