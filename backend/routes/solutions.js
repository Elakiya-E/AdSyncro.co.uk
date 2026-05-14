const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/genericController');

router.get('/', getItems('solutions'));
router.post('/', createItem('solutions'));
router.put('/:id', updateItem('solutions'));
router.delete('/:id', deleteItem('solutions'));

module.exports = router;
