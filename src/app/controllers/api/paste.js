import { APIHandler } from "./api-handler.js";
import { PASTE_MODEL } from "../../models/ghost-paste.js";

class Paste extends APIHandler {

    handleUpload = async (request, response) => {

        const UPLOADED_PASTE = await this.create(request.body);

        response.json(UPLOADED_PASTE);
    }

    handleDelete = async (request, response) => {

        const ID = request.params.id;
        const DELETED_PASTE = await this.deleteByID(ID);

        response.json(DELETED_PASTE);
    }

    handleGet = async (request, response) => {

        const ID = request.params.id;
        const PASTE = await this.get(ID);

        response.json(PASTE);
    }
}

export default new Paste(PASTE_MODEL);