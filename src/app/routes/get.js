import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the upload router reference.
 */
const GET_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    GET_ROUTER.get('/', APIHandler.landingHandler);
    GET_ROUTER.get('/paste/:id', Paste.handleGet);

    return GET_ROUTER;
}

export { ROUTES };