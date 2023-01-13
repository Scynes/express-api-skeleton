import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the upload router reference.
 */
const UPLOAD_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    UPLOAD_ROUTER.get('/', APIHandler.landingHandler);
    UPLOAD_ROUTER.post('/paste', Paste.handleUpload);

    return UPLOAD_ROUTER;
}

export { ROUTES };