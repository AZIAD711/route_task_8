import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    // TITLE
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Title must be unique"],
        trim: true,
        validate: {
            validator: function (value) {
                return value.length >= 3 && value.length < 256;
            },
            message: "Title must be between 3 and 255 characters"
        }
    },
    // AUTHOR
    author: {
        type: String,
        required: [true, "Author is required"],
        trim: true,
        validate: {
            validator: function (value) {
                return value.length >= 3 && value.length < 256;
            },
            message: "Author name must be between 3 and 255 characters"
        }
    },
    // YEAR
    year: {
        type: Number,
        required: [true, "Year is required"],
        min: [1900, "Year must be greater than 1900"],
        max: [2026, "Year must be less than 2026"],
    },
    // GENRE
    genre: {
        type: [String],
    }
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

const BookModel = model("Book", bookSchema);
export { BookModel };