const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');

router.get('/api/books', (req, res) =>{
    console.log("hi from api")
    db.BookStorage
        .find({})
        .then((results)=> {
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/api/books', (req, res) => {
	db.BookStorage.collection.insertOne(req.body)
		.then(results => res.json(results))
		.catch((err)=>{
			console.log(err);
		});

})

module.exports = router;