import {connectionOfDatabase} from "./src/database/connection.js"
import express from "express"
import bookRouting from "./src/module/book/book.routing.js"
const app = express()
app.use(express.json())
// CONNECTION OF DATABASE
await connectionOfDatabase()
// BOOK MOUDLE 
app.use("/collection",bookRouting)
export default app 