import { Schema } from "mongoose";
const bookSchema = new Schema({
    // TITLE
    title: {
        stype: [String, "Title must be a string"],
        required: [true, "Title is required"],
        unique: [true, "Title must be unique"],
        trim: true,
        valdiate: {
            valditor: function (value) {
                return value.length >= 3 && value.length < 256
            }
        }
    },
    // AUTHOR
    author: {
        stype: [String, "Author must be a string"],
        required: [true, "Author is required"],
        unique: [true, "Author must be unique"],
        required: true,
        valdiate: {
            valditor: function (value) {
                return value.length >= 3 && value.length < 256
            }
        }
    },
    // YEAR
    year: {
        type: [Number, "Year must be a number"],
        required: [true, "Year is required"],
        min: [1900, "Year must be greater than 1900"],
        max: [2026, "Year must be less than 2026"],
    },
    // GENRE
    genre: [{
        type: [String, "Genre must be a string"],
    }]
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
    }
)
const BookModel = model("Book",bookSchema)
export default BookModel