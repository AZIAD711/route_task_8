import {connectionOfDatabase} from "./src/database/connection.js"
import express from "express"
import bookRouting from "./src/module/book/book.routing.js"
import authorRouting from "./src/module/author/author.routing.js"
import logRouting from "./src/module/log/log.routing.js"
const app = express()
app.use(express.json())
// CONNECTION OF DATABASE
await connectionOfDatabase()
// BOOK MOUDLE 
app.use("/collection",bookRouting)
// LOG MOUDLE 
app.use("/collection",logRouting)
// AUHTOR MOUDLE 
app.use("/collection",authorRouting)
export default app 