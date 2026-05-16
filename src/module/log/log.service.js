import {LogModel} from "../../model/log.model.js"
// ADD NEW LOG 
export async function addlogSevices(data){
    return await LogModel.create(data)
}