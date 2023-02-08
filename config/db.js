import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOOSE_STRING, (data) => {
    console.log("Database is connected succesfully")
}, (err) => {
    console.log(err);
})
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function () {
    console.log('Connected to MongoDB');
});
export default dbConnection;





