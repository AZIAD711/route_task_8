import { Schema, model } from "mongoose";

const logSchema = new Schema({
    // MESSAGE
    message: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                return value.length >= 4 && value.length < 256;
            },
            message: "Message must be between 4 and 255 characters"
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
    },
    capped: {
        size:1024 * 1024
    },
});

const LogModel = model("Log", logSchema);
export { LogModel };