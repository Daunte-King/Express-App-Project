var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/', artistsCtrl.index);
router.get('/new', artistsCtrl.new);

router.post('/', artistsCtrl.create);
router.get('/:id', artistsCtrl.show);
router.delete('/:id', artistsCtrl.delete);

module.exports = router;
