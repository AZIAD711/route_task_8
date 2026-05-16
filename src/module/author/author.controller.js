import mongoose from "mongoose"
import {addAuthorSevices} from "./author.service.js"
// ADD NEW AUHTOR 
export async function addAuthorController(request,resposne){
    const session = mongoose.startSession()
    try {
        const auhtorData = await addAuthorSevices(request.body)
        return resposne.status(200).json({
            "ok":1,
            "message":"Auhtor Added Sccuessfully",
            "data":auhtorData
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