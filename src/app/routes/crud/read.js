import Express from "express";
import { APIHandler } from "../../../controllers/api-handler.js";
import Paste from "../../../controllers/api/paste.js.js";

/**
 * Defines the create router reference.
 */
const READ_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    READ_ROUTER.get('/', APIHandler.landingHandler);

    return READ_ROUTER;
}

export { ROUTES };