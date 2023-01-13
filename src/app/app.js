import Express from 'express';
import { ROUTES as UPLOAD_ROUTER } from './routes/upload.js';
import { ROUTES as GET_ROUTER } from './routes/get.js';
import { ROUTES as DELETE_ROUTER } from './routes/delete.js';
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

    // Sets the router for uploads
    WEB_SERVER.use('/upload', UPLOAD_ROUTER());
    // Sets the router for sgetting a resource
    WEB_SERVER.use('/get', GET_ROUTER());
    // Sets the router for deleting
    WEB_SERVER.use('/delete', DELETE_ROUTER());

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