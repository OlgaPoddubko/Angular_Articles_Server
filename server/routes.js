const router = require('express').Router();
const Article = require('./schema');

const handleError = (text, next) => {
  const err = new Error(text);
  err.status = 404;
  next(err);
};

router.get('/articles', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.send(articles);
  });
});

router.post('/articles/add', function(req, res, next) {
  const article = new Article({
    id: req.body.id,
    text: req.body.text,
    content: req.body.content,
    created: Date.now()
  });

  article.save(function(err, raw) {
    if (err) handleError('Article Not Saved', next);
    res.send(article);
  });
});

router.put('/articles/:id', function(req, res, next) {
  Article.update(
    { _id: req.params.id },
    { text: req.body.text, content: req.body.content },
    function(err, raw) {
      if (err) handleError('Article Not Updated', next);
      res.send('Article was updated');
    }
  );
});

router.delete('/articles/:id', function(req, res, next) {
  Article.find({ _id: req.params.id }).remove(function(err, raw) {
    if (err) return handleError('Article Not Deleted', next);
    res.send('Article was deleted');
  });
});

module.exports = router;
