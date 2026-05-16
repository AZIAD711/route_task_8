import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    // NAME
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: [true, "Name must be unique"],
        trim: true,
        validate: {
            validator: function (value) {
                return value.length >= 3 && value.length < 256;
            },
            message: "Name must be between 3 and 255 characters"
        }
    },
    // NATIONLITY
    nationlity: {
        type: String,
        required: [true, "Nationlity is required"],
        trim: true,
        validate: {
            validator: function (value) {
                return value.length >= 3 && value.length < 256;
            },
            message: "Nationlity must be between 3 and 255 characters"
        }
    },
},
{
    timestamps: true,
    strict: true,
    strictQuery: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

const AuthorModel = model("Author", authorSchema);
export { AuthorModel };