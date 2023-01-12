export class Uploader {

    constructor() {

    }

    handleUpload = (request, response) => {

        request.json({
            'error': 'No upload handler was defined!'
        })
    }
}