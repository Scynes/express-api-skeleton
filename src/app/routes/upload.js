import Express from "express";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the upload router reference.
 */
const UPLOAD_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    UPLOAD_ROUTER.get('/', landingHandler);
    UPLOAD_ROUTER.post('/paste', Paste.handleUpload);
    UPLOAD_ROUTER.delete('/paste', Paste.handleDelete);

    return UPLOAD_ROUTER;
}

/**
 * Default handler method for a get request on root /u route.
 * 
 * @param {*} request 
 * @param {*} response 
 */
const landingHandler = (request, response) => {

    response.json({
        error: 'This is not a valid handler path!'
    })
}

export { ROUTES };