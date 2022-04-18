// require("dotenv").config();
const express = require('express');

// Connect
require('../db/db');

// Import Module
const Book = require('./Book');

// Load express
const app = express();
const port = 3000;
app.use(express.json())

//----------------API--------------------------------



// To Add Book Data
app.post('/book', (req, res) => {
    const newBook = {
		"title": req.body.firstName,
		"author": req.body.lastName,
		"numberPages": req.body.email,
		"publisher": req.body.phone
	}
    const book = new Book(newBook)
    book.save().then((r) => {
		res.send("User created..")
	}).catch( (err) => {
		if(err) {
			throw err
		}
	})


    // newBook.save().then(() => {
    //       res.send('New Book added successfully!')
    // }).catch((err) => {
    //      res.status(500).send('Internal Server Error!');
    // })
})




//----------------API--------------------------------
app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Book service`);
})




// https://github.com/happy-bhesdadiya/microservices-demo
// https://www.bacancytechnology.com/blog/how-to-build-microservices-with-node-js