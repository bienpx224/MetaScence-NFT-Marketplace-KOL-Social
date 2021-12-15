module.exports = function(app){

    app.get('/api/char', (req,res)=>{
        res.send({message: "Char server"})
    })



}