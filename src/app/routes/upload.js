import Express from "express";

/**
 * Defines the upload router reference.
 */
const UPLOAD_ROUTER = Express.Router();

UPLOAD_ROUTER.get('/', (request, response) => {
    response.send('boom');
})


export { UPLOAD_ROUTER };