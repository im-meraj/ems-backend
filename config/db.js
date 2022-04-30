import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDB;

// "mongodb://merajSheikh:merajSheikh@payroll-system-shard-00-00.j4juk.mongodb.net:27017,payroll-system-shard-00-01.j4juk.mongodb.net:27017,payroll-system-shard-00-02.j4juk.mongodb.net:27017/employee_management?ssl=true&replicaSet=atlas-wnmyzu-shard-0&authSource=admin&retryWrites=true&w=majority"