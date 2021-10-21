//****************************************************************************
// the title of this web site
const title = 'Nordic Rose';


//****************************************************************************
// some predefined blog entries
const blogs = require('./data/blogs')


//****************************************************************************
// setup express
const express = require('express');
const app = express();


//****************************************************************************
// use mongoose for accessing a Mongo DB
const mongoose = require('mongoose');
const BlogEntry = require('./models/blogEntry');


//****************************************************************************
// use axios for accessing api
// const axios = require('axios');


//****************************************************************************
// use dotenv for accessing environment variables
require('dotenv').config();


//****************************************************************************
// use ejs as standard view engine
app.set('view engine', 'ejs');


//****************************************************************************
// use some built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//****************************************************************************
// connect to the Mongo DB and - if successful - start the server
mongoose.connect(process.env.MONGODB, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("database is connected");
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server listening to localhost:${port}`));
});



//****************************************************************************
// the routing commands
//****************************************************************************

//----------------------------------------------------------------------------
// the start page
app.get('/', (req, res) => {

    res.render('pages/index', { title, blogs });
});


//----------------------------------------------------------------------------
// the  page for writing a new blog entry
app.get('/add-new', (req, res) => {

    res.render('pages/add-new', { title });
});


//----------------------------------------------------------------------------
// show a blog article
app.get('/blog/:id', (req, res) => {

    res.render('pages/blog', { title, blogs, id: req.params.id });
});


//----------------------------------------------------------------------------
// adding a new blog entry using method post
app.post('/new', (req, res) => {

    let blog = new BlogEntry({
        id: getMaxId() + 1,
        url: req.body.txtUrlPicture,
        title: req.body.txtTitle,
        body: req.body.txtArticle,
        published_at: new Date(),
        duration: Math.floor(req.body.txtArticle.length / 50) + 1,
        author: req.body.txtAuthor,
        author_bild: req.body.txtAuthorPicture,
    });

    blog.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
});


//****************************************************************************
// some helper functions
function getMaxId() {
    return 1001;
}
