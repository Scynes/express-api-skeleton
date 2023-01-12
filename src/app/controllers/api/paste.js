import { APIHandler } from "./api-handler.js";
import { PASTE_MODEL } from "../../models/ghost-paste.js";

class Paste extends APIHandler {

    constructor() {
        super();
    }

    handleUpload = async (request, response) => {
        const PASTE = await this.create(PASTE_MODEL, request.body, response);

        response.json(PASTE);
    }
}

export default new Paste();