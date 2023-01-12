import Express from 'express';
import { UPLOAD_ROUTER } from './routes/upload.js';
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
    WEB_SERVER.use('/upload', UPLOAD_ROUTER)
}

/**
 * Binds active middleware for the application.
 */
const bindMiddleware = () => {

}

/**
 * Binds the database connection to the application.
 */
const bindDatabase = () => {

    Mongoose.set('strictQuery', true);

    Mongoose.connect(DATABASE_URI);

    Mongoose.connection.on('error', error => console.log(`${APP_NAME} - an error has occured while connecting to MongoDB: ${error.message}...`));

    Mongoose.connection.on('connected', () => {
        console.log(`${APP_NAME} - mongoDB successfully connected on ${Mongoose.connection.port}`)

        WEB_SERVER.listen(PORT, () => {

            console.log(`${APP_NAME} - now listening for connections on port ${PORT}...`);
        });
    });

}

/**
 * Builds the API and binds requirements.
 */
const build = () => {

    bindRoutes();
    bindDatabase();
}

export { build, WEB_SERVER };