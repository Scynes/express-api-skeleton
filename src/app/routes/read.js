import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the create router reference.
 */
const READ_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    READ_ROUTER.get('/', APIHandler.landingHandler);
    READ_ROUTER.get('/paste/:id', Paste.handleGet);

    return READ_ROUTER;
}

export { ROUTES };