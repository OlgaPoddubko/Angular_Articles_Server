const mongoose = require('./index');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  id: String,
  text: String,
  content: String,
  created: Date
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
