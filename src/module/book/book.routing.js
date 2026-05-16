import {addBookController} from "./book.controller.js"
import express from "express"
const API = express.Router()
// http://localhost:3000/collection/books
API.post("/books",addBookController)
export default API