import { APIHandler } from "./api-handler.js";
import { PASTE_MODEL } from "../../models/ghost-paste.js";

class Paste extends APIHandler {

    constructor() {
        super();
    }

    handleUpload = async (request, response) => {
        const PASTE = await this.create(PASTE_MODEL, request.body);

        response.json(PASTE);
    }

    handleDelete = async (request, response) => {

        // Implement ID grabbing logic here
        const ID = '63c0d5b70493af82f1570cce';
        const DELETED_PASTE = await this.deleteByID(PASTE_MODEL, ID);

        response.json(DELETED_PASTE);
    }
}

export default new Paste();