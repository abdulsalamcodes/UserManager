import express from 'express';
import userRouter from './routes/userRoutes';
import bodyParser from 'body-parser'; // Use the body-parser middleware

const app = express();

// Use the body-parser middleware for JSON parsing
app.use(bodyParser.json());

app.use('/api', userRouter);

const PORT = process.env.PORT || 3000; // Use environment variable for port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
