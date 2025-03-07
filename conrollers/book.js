const Book=require('../models/book.js');
const bookGet= async (req,res)=>{

    try{
        const booklist= await Book.find();
        res.json(booklist);
    }
    catch(err)
    {
        res.status(400).json({message:err.message})
    }
}

const oneBook=async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        if(book==null)
              {
                return res.status(404).json({message:"Cannot find"})
              }
              else{
                res.json(book);
              }
            
    }
    catch(err)
    {
        return res.status(500).json({message:err.message});
    }
}
const bookPost= async (req,res) => {
    //title , price
    console.log(req.body);
     const createBook=new Book({
        title:req.body.title,
        price:req.body.price,
     })
     try{
   const book= await createBook.save();
   return res.status(200).json(book);
     }
     catch(err){
        return res.status(400).json({message: err.message})
     }

    //return res.json(req.body)
    // res.send("create movie")
}
 const bookUpdate= async (req,res)=>{
   
    try{
      const updateBook=await Book.findByIdAndUpdate({_id:req.params.id},

        {
            title:req.body.title,
            price:req.body.price,
        },{
            new:true,
        }
      )
      res.status(200).json(updateBook)
    }
    catch(err)
    {
        res.status(500).json({message:err.message})
    }
}
 const bookDelete= async(req,res)=>{


    const id= req.params.id;

    try{
        await Book.findOne({_id:id}).deleteOne();
        res.json({message:"movie deleted"});
    }
    catch(err)
    {
        res.status(400).json({message:err.message})
    }
}


module.exports = { bookGet, bookPost, bookUpdate, bookDelete ,oneBook};