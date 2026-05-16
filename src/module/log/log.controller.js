import mongoose from "mongoose"
import {addlogSevices} from "./log.service.js"
// ADD NEW LOG 
export async function addAuthorController(request,resposne){
    const session = mongoose.startSession()
    try {
        const logData = await addlogSevices(request.body)
        return resposne.status(200).json({
            "ok":1,
            "message":"Log Added Sccuessfully",
            "data":logData
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