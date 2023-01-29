import Express from 'express';
import { ROUTES as CREATE_ROUTER } from './routes/create.js';
import { ROUTES as READ_ROUTER } from './routes/read.js';
import { ROUTES as UPDATE_ROUTER } from './routes/update.js';
import { ROUTES as DELETE_ROUTER } from './routes/delete.js';
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
const { PORT = 3000, APP_NAME = 'Express API Skeleton' } = process.env;

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
 * Binds http server to the designated port.
 */
const bindPort = async () => {

    WEB_SERVER.listen(PORT, () => {

        console.log(`${APP_NAME} - now listening for connections on port ${PORT}...`);
    });
}

/**
 * Builds the API and binds requirements.
 */
const build = () => {

    bindMiddleware();
    bindRoutes();
    bindPort();
}

// Build the application.
build();