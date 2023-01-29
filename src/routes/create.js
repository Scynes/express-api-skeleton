import Express from "express";
import APIHandler from "../controllers/api-handler.js";

/**
 * Defines the upload router reference.
 */
const CREATE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    CREATE_ROUTER.get('/', APIHandler.routeNotValid);

    return CREATE_ROUTER;
}

export { ROUTES };