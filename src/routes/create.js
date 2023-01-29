import Express from "express";
import APIHandler from "../controllers/api-handler.js";

/**
 * Defines the upload router reference.
 */
const UPLOAD_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance.
 */
const ROUTES = () => {

    UPLOAD_ROUTER.get('/', APIHandler.landingHandler);

    return UPLOAD_ROUTER;
}

export { ROUTES };