import Express from 'express';
import { ROUTES as CREATE_ROUTER } from './routes/crud/create.js';
import { ROUTES as READ_ROUTER } from './routes/crud/read.js';
import { ROUTES as UPDATE_ROUTER } from './routes/crud/update.js';
import { ROUTES as DELETE_ROUTER } from './routes/crud/delete.js';
import Mongoose from 'mongoose';
import DotENV from 'dotenv';

/**
 * The web server express instance reference.
 */
const WEB_SERVER = Express();

/**
 * Configure environmental variables
 */
DotENV.config();

/**
 * Read the environment variables for running the application.
 */
const {PORT, DATABASE_URI, APP_NAME = 'Ghost Upload API' } = process.env;

/**
 * Binds the routes to the application running state.
 */
const bindRoutes = () => {

    // Sets the router for create
    WEB_SERVER.use('/c', CREATE_ROUTER());
    // Sets the router for reading a resource
    WEB_SERVER.use('/r', READ_ROUTER());
    // Sets the router for updating
    WEB_SERVER.use('/u', UPDATE_ROUTER());
    // Sets the router for deleting
    WEB_SERVER.use('/d', DELETE_ROUTER());

    console.log(`${APP_NAME} - successfully bound routes...`);
}

/**
 * Binds active middleware for the application.
 */
const bindMiddleware = () => {

    // Sets the middleware for parsing json.
    WEB_SERVER.use(Express.json());

    console.log(`${APP_NAME} - successfully bound middleware...`);
}

/**
 * Binds the database connection to the application.
 */
const bindDatabase = () => {

    Mongoose.set('strictQuery', true);

    Mongoose.connect(DATABASE_URI);

    Mongoose.connection.on('error', error => console.log(`${APP_NAME} - an error has occured while connecting to MongoDB: ${error.message}...`));

    Mongoose.connection.on('connected', () => {
        console.log(`${APP_NAME} - mongoDB successfully connected on ${Mongoose.connection.port}...`)

        WEB_SERVER.listen(PORT, () => {

            console.log(`${APP_NAME} - now listening for connections on port ${PORT}...`);
        });
    });

}

/**
 * Builds the API and binds requirements.
 */
const build = () => {

    bindMiddleware();
    bindRoutes();
    bindDatabase();
}

export { build, WEB_SERVER };