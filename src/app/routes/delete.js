import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the delete router reference.
 */
const DELETE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    DELETE_ROUTER.get('/', APIHandler.landingHandler);
    DELETE_ROUTER.delete('/paste', Paste.handleDelete);

    return DELETE_ROUTER;
}

export { ROUTES };