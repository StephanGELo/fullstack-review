const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

//Defining a schema using mongoose
//Everything in Mongoose 
//starts with a Schema. 
//Each schema maps to a MongoDB collection 
//and defines the shape of the documents 
//within that collection.
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  login: String,
  html_url: String,
  repos: {
    id: Number,
    name: String,
    full_name: String,
    forks: Number
  }
});

//To use our schema definition, 
//we need to convert our blogSchema 
//into a Model we can work with
let Repo = mongoose.model('Repo', repoSchema);

let save = (err, Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) return console.error(err);
};

module.exports.save = save;