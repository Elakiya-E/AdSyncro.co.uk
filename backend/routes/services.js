const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/genericController');

router.get('/', getItems('services'));
router.post('/', createItem('services'));
router.put('/:id', updateItem('services'));
router.delete('/:id', deleteItem('services'));

module.exports = router;
