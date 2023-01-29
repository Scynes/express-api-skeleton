import Express from "express";
import APIHandler from "../controllers/api-handler.js";

/**
 * Defines the delete router reference.
 */
const DELETE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    DELETE_ROUTER.get('/', APIHandler.routeNotValid);

    return DELETE_ROUTER;
}

export { ROUTES };