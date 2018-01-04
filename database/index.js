const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');
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
    id: {type:Number, index: {unique: true}},
    name: String,
    full_name: String,
    forks: Number
  }
});
//repoSchema.plugin(uniqueValidator);

//To use our schema definition, 
//we need to convert our blogSchema 
//into a Model we can work with
let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
   // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var repo = new Repo (data);
  // if repo.
  repo.save((err)=> {
    if (err) {
      return handleError(err);
    } 
  });
  //HOW TO HANDLE SAVE MORE THAN ONE REPO HERE?
  
};

module.exports.save = save;