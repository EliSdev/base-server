var router = require('express').Router();
var companyModel = global.db.models.Company;

router.get('/', function(req, res) {
  companyModel.find({}, function(err, results) {
    if(err) {
      res.status(500).send({
        success: false,
        error: err
      }).end();
      console.error(err);
      throw err;
    }
    res.status(200).send(results).end();
  });
});

router.post('/', function(req, res) {
  var newCompany = companyModel(req.body);
  newCompany.save(function(err) {
    if(err) {
      res.status(500).send({
        success: false,
        error: err
      }).end();
      console.error(err);
    } else {
      res.status(200).send({
        success: true,
        error: err
      }).end();
    }
  });
});
router.put('/', function(req, res) {
  res.send('Company route put');
});
router.delete('/', function(req, res) {
  res.send('Company route delete');
});

module.exports = router;
