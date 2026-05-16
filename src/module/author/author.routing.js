import {addAuthorController} from "./author.controller.js"
import express from "express"
const API = express.Router()
// http://localhost:3000/collection/author
API.post("/author",addAuthorController)
export default API