import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Paste from "../controllers/api/paste.js";

/**
 * Defines the update router reference.
 */
const UPDATE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    UPDATE_ROUTER.get('/', APIHandler.landingHandler);
    UPDATE_ROUTER.put('/paste/:id', Paste.handleUpdate);

    return UPDATE_ROUTER;
}

export { ROUTES };