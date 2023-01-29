export default class APIHandler {

    constructor (model) {

    }

    /**
     * Default handler method for a get request on root / API routes.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    static landingHandler = (request, response) => {

        response.json({
            error: 'This is not a valid API route!'
        })
    }

    /**
     * Handles an upload requests. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleUpload = (request, response) => {

        throw new Error(`Error: handleUpload() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

    /**
     * Handles delete requests. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleDelete = (request, response) => {

        throw new Error(`Error: handleDelete() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

    /**
     * Handles a request for getting a document.  Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleGet = (request, response) => {

        throw new Error(`Error: handleGet() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

    /**
     * Handles a request for editing an existing document.  Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleUpdate = (request, response) => {

        throw new Error(`Error: handleEdit() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }
}