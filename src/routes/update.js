import Express from "express";
import APIHandler from "../controllers/api-handler.js";

/**
 * Defines the update router reference.
 */
const UPDATE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    UPDATE_ROUTER.get('/', APIHandler.landingHandler);

    return UPDATE_ROUTER;
}

export { ROUTES };