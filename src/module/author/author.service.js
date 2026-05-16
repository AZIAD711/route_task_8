import {AuthorModel} from "../../model/author.model.js"
// ADD NEW AUTHOR 
export async function addAuthorSevices(data){
    return await AuthorModel.create(data)
}