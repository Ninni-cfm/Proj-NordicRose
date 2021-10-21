const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
    "id": 6,
    "url": "/img7.jpg",
    "title": "It’s all about finding the perfect balance",
    "body": "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    "published_at": "Oct 3, 2020",
    "duration": 5,
    "author": "Mika Matikainen",
    "author_bild": "https://source.unsplash.com/random/100x100"

*/
const blogSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        published_at: {
            type: Date,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        author_bild: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const BlogEntry = mongoose.model('Blogs', blogSchema);

module.exports = BlogEntry;