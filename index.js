import app from "./app.js"
// SERVER FUNCTION 
function startServer (){
    app.listen(3000,()=>{
        console.log("✅ SEREVER IS RUNNING ON PORT 3000")
    })
}
startServer()