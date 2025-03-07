const { Schema, model } = require("mongoose");
const schema=new Schema({
    title: String,
    price:Number
})
const Book=model("Book",schema,"book_detail");
module.exports=Book;