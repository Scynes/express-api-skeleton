import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the upload router reference.
 */
const SHOW_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    SHOW_ROUTER.get('/', APIHandler.landingHandler);
    SHOW_ROUTER.get('/paste', Paste.handleGet);

    return SHOW_ROUTER;
}

export { ROUTES };