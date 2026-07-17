import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRUD CSE341 API',
      version: '1.0.0',
      description: 'API documentation for CRUD operations'
    },
    servers: [
      {
        // Use environment variable if available, otherwise default to localhost
        url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}/api`
      }
    ]
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
