export class APIHandler {

    constructor() {

    }

    handleUpload = (request, response) => {
        
        response.json({
            'error': 'No upload handler was defined!'
        })
    }

    create = async (schema, data, response) => {

        try {

            const result = await schema.create(data);

            return result;

        } catch (error) {

            return { error: 'There was a problem uploading your paste!' };
        }
    }
}