import {addAuthorController} from "./log.controller.js"
import express from "express"
const API = express.Router()
// http://localhost:3000/collection/logs/capped
API.post("/logs/capped",addAuthorController)
export default API