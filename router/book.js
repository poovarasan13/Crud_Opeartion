const express=require('express');

const router=express.Router();

const { bookGet, bookPost, bookUpdate, bookDelete ,oneBook } = require('../conrollers/book.js');

router.get('/',bookGet);
router.get('/:id',oneBook);
router.post('/',bookPost)
router.put('/:id',bookUpdate)
router.delete('/:id',bookDelete)

module.exports= router;