"use strict";
var mongoose = require("mongoose");
const ArticleModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "article title is required"],
        unique: true
    },
    url: {
        type: String,
        required: [true, "article url is required"],
        unique: true
    },
    lastAuthor: {
        type: String,
        required: [true, "article author is required"],
    },
    lastEdited: {
        type: Date,
        required: [true, "article lastEdited property is required"],
    },
    body: {
        type: String,
        required: false
    },
    sideBody: {
        type: String,
        required: false
    }
});
var Article = mongoose.model('article', ArticleModel);
module.exports = Article;
