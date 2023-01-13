import util from 'util';

export class APIHandler {

    /**
     * Handles an upload requests. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleUpload = (request, response) => {

        throw new Error('Error: handleUpload() must be implemented!');
    }

    /**
     * Handles delete requests. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleDelete = (request, response) => {

        throw new Error('Error: handleDelete() must be implemented!');
    }

    /**
     * Handles a request for getting a document.  Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    handleGet = (request, response) => {

        throw new Error('Error: handleLocate() must be implemented!');
    }

    /**
     * Creates a new mongoDB document entry.
     * 
     * @param {*} schema mongoDB schema to create the document.
     * @param {*} data  the data to submit to the document.
     * @param {*} callback optional callback.
     * @returns mongoose creation result.
     */
    create = async (schema, data, callback) => {

        const result = await schema.create(data).catch((error) => (error));

        if (callback) callback();

        return result;
    }

    /**
     * Deletes a schemas document entry by id.
     * 
     * @param {*} schema mongoDB schema to delete from.
     * @param {*} id  the id of the document.
     * @param {*} callback optional callback.
     * @returns mongoose deletion result.
     */
    deleteByID = async (schema, id, callback) => {

        const result = await schema.deleteOne({_id: id}).catch((error) => (error));

        if (callback) callback();

        return result;
    }

    /**
     * Locates a document by id if it exists.
     * 
     * @param {*} schema mongoDB schema to search.
     * @param {*} id the id of the document.
     * @param {*} callback optional callback.
     * @returns mongoose result.
     */
    get = async (schema, id, callback) => {

        const result = await schema.findOne({_id: id}).catch((error) => (error));

        if (callback) callback();

        return result;
    }
}