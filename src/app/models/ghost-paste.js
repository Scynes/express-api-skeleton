import Mongoose from "mongoose";

/**
 * Holds the Schema reference for mongoose.
 */
const Schema = Mongoose.Schema;

/**
 * MongoDB document model schema.
 */
const GHOST_PASTE_SCHEMA = new Schema({

    title: {
        type: String,
        default: 'Untitled'
    },

    highlighting: {
        type: String,
        default: 'text'
    },

    body: {
        type: String,
        required: true
    }

}, { timestamps: true, collection: 'pastes' });

/**
 * References the schema as a model.
 */
const PASTE_MODEL = Mongoose.model(GHOST_PASTE_SCHEMA);

export { PASTE_MODEL };