export default class APIHandler {

    /**
     * Default handler method for a get request on root / API routes.
     * 
     * @param {*} ∂request 
     * @param {*} response 
     */
    static routeNotValid = (request, response) => {

        response.json({
            error: 'This is not a valid API route!'
        })
    }

    /**
     * Handles an create request. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleCreate = (request, response) => {

        throw new Error(`Error: handleCreate() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
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
    handleRead = (request, response) => {

        throw new Error(`Error: handleRead() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
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