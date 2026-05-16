import {BookModel} from "../../model/book.model.js"
// ADD NEW BOOK 
export async function addBookSevices(data){
    return await BookModel.create(data)
}