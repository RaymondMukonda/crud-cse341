import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';   
import { swaggerUi, swaggerSpec } from './swagger.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);   

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
