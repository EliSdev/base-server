var router = require('express').Router();
var userModel = global.db.models.User;

router.get('/', function(req, res) {
  res.send('User route get');
});
router.post('/', function(req, res) {
  res.send('User route post');
});
router.put('/', function(req, res) {
  res.send('User route put');
});
router.delete('/', function(req, res) {
  res.send('User route delete');
});

module.exports = router;
