import Mongoose from 'mongoose';

/**
 * Used for abstraction, APIHandler works as a worker for wrapping
 * mongoose methods and referencing them with the passed constructor {Mongoose.Model}.
 * 
 * @function handleGet(),handleUpload(),handleDelete()
 *      require implementation of extended APIHandler.
 */
export class APIHandler {

    /**
     * APIHandler constructor must be passed a valid mongoose model containing
     * a schema otherwise an error will be thrown for invalidation.
     * 
     * @param {*} model mongoose schema model can only be passed here.
     */
    constructor (model) {

        if (!model || !(model.schema instanceof Mongoose.Schema)) {
            throw (new Error (`APIHandler - class ${this.constructor.name} must pass a mongoose Schema model to the constructor!`));
        }

        this.MODEL = model;
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
     * Creates a new mongoDB document entry.
     * 
     * @param {*} data  the data to submit to the document.
     * @param {*} callback optional callback.
     * @returns mongoose creation result.
     */
    create = async (data, callback) => {

        const result = await this.MODEL.create(data).catch((error) => (error));

        if (callback && (typeof callback === 'function')) callback(result);

        return result;
    }

    /**
     * Deletes a document entry by id.
     * 
     * @param {*} id  the id of the document.
     * @param {*} callback optional callback.
     * @returns mongoose deletion result.
     */
    deleteByID = async (id, callback) => {

        const result = await this.MODEL.deleteOne({_id: id}).catch((error) => (error));

        if (callback && (typeof callback === 'function')) callback(result);

        return result;
    }

    /**
     * Locates a document by id if it exists.
     * 
     * @param {*} id the id of the document.
     * @param {*} callback optional callback.
     * @returns mongoose result.
     */
    get = async (id, callback) => {

        const result = await this.MODEL.findOne({_id: id}).catch((error) => (error));

        if (callback && (typeof callback === 'function')) callback(result);

        return result === null ? { message: `_id: ${id} not found for model '${this.MODEL.collection.collectionName}'` } : result;
    }
}