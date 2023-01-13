import { APIHandler } from "./api-handler.js";
import { PASTE_MODEL } from "../../models/ghost-paste.js";

class Paste extends APIHandler {

    handleUpload = async (request, response) => {

        const UPLOADED_PASTE = await this.create(PASTE_MODEL, request.body);

        response.json(UPLOADED_PASTE);
    }

    handleDelete = async (request, response) => {

        // Implement ID grabbing logic here
        const ID = '63c0d5b70493af82f1570cce';
        const DELETED_PASTE = await this.deleteByID(PASTE_MODEL, ID);

        response.json(DELETED_PASTE);
    }

    handleGet = async (request, response) => {

        // Implement ID grabbing logix here
        const ID = '63c0d73f41b232caca304404';
        const PASTE = await this.get(PASTE_MODEL, ID);

        response.json(PASTE);
    }
}

export default new Paste();