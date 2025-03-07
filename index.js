const express=require('express');
const ConnectDB=require('./lib/db.js')
const bookRoutes=require('./router/book.js');
// app.get('/',(req,res)=>{

//     res.json({name:"Poovarasan",
//         age:20
//     });
//     return res.status(200)
// })

ConnectDB();

const app=express();
app.use(express.json())
const port=9001;
app.use('/book',bookRoutes)


app.listen(port,()=>{
    console.log("Port Running on "+port);
})