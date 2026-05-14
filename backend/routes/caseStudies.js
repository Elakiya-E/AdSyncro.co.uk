const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/genericController');

router.get('/', getItems('caseStudies'));
router.post('/', createItem('caseStudies'));
router.put('/:id', updateItem('caseStudies'));
router.delete('/:id', deleteItem('caseStudies'));

module.exports = router;
