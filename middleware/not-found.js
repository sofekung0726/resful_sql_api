const notFound = (req , res , next) =>{
    res.stasus(400).send("Router does not exist")
    next()
}
module.exports = notFound;