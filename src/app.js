const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRoutes = require('./routes/authRoutes');
const coinRoutes = require('./routes/coinRoutes');

const app = express();

const options = {
    definition: {
        openapi: '3.0.0',
        servers: [
            {
                url: "http://localhost:3000/",
            }
        ],
        info: {
            title: 'Crypto Fintech API',
            version: '1.0.0',
            description: 'API for fetching coin data and user authentication',
        },
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
console.log(specs); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

// Use different base paths for auth and coins
app.use('/api', authRoutes);
app.use('/api', coinRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
