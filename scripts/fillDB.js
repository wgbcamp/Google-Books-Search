const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/GoogleBooks');

const newItemSeed =[ 
    {
        title: "Pokemon Ultimate Handbook",
        authors: ["Cris Silvestri"],
        description: "A guide to Pokâemon provides information on the pronunciation, possible moves, type, height, weight, and region of every Pokâemon character.",
        link: "undefined",
        image: "http://books.google.com/books/content?id=KSIH0ltKUVkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
];

db.BookStorage
    .deleteMany({})
    .then(() => db.BookStorage.collection.insertMany(newItemSeed))
    .then((data) => {
        // console.log("seeds were successfully inserted");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

