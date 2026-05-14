const express = require('express');
const router = express.Router();
const { getItems, getItemBySlug, createItem, updateItem, deleteItem } = require('../controllers/genericController');

router.get('/', getItems('blogs'));
router.get('/:slug', getItemBySlug('blogs'));
router.post('/', createItem('blogs'));
router.put('/:id', updateItem('blogs'));
router.delete('/:id', deleteItem('blogs'));

module.exports = router;
