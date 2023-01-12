import Express from 'express';
import DotENV from 'dotenv';

/**
 * The web server express instance reference.
 */
const WEB_SERVER = Express();

/**
 * Read the environment variables for running the application.
 */
const { PORT = 3000, DATABASE_URI, APP_NAME = 'Ghost Upload API' } = process.env;

/**
 * Binds the routes to the application running state.
 */
const bindRoutes = () => {

}

/**
 * Binds active middleware for the application
 */
const bindMiddleware = () => {

}

/**
 * Binds the database connection to the application.
 */
const bindDatabase = () => {

}

/**
 * Builds the API and binds requirements.
 */
const build = () => {

    WEB_SERVER.listen(PORT, () => {

        console.log(`${APP_NAME} - now listening for connections on port ${PORT}...`);
    });
}

export { build };