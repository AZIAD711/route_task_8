import mongoose from "mongoose"
import {addBookSevices} from "./book.service.js"
// ADD NEW BOOK 
export async function addBookController(request,resposne){
    const session = mongoose.startSession()
    try {
        const bookData = await addBookSevices(request.body)
        return resposne.status(200).json({
            "ok":1,
            "message":"Book Added Sccuessfully",
            "data":bookData
        })
        session.commitTransaction()
    } catch (error) {
        console.log(`❌ ERROR IN CONTROLLER OF BOOK : ${error}`)
        return resposne.status(500).json({
            "errorMessage":"Something Went Wrong"
        })
        session.abortTransaction()
    }
    finally{
    (await session).endSession
    }
}