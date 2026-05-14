const db = require('../db');

const getItems = (collectionName) => async (req, res) => {
    try {
        const items = await db.findCollection(collectionName);
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItemById = (collectionName) => async (req, res) => {
    try {
        const items = await db.findCollection(collectionName);
        const item = items.find(i => i._id === req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItemBySlug = (collectionName) => async (req, res) => {
    try {
        const items = await db.findCollection(collectionName);
        const item = items.find(i => i.slug === req.params.slug);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createItem = (collectionName) => async (req, res) => {
    try {
        const savedItem = await db.insert(collectionName, req.body);
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateItem = (collectionName) => async (req, res) => {
    try {
        const data = await db.read();
        const items = data[collectionName];
        const index = items.findIndex(i => i._id === req.params.id);
        if (index === -1) return res.status(404).json({ message: 'Item not found' });

        items[index] = { ...items[index], ...req.body };
        await db.write(data);
        res.json(items[index]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteItem = (collectionName) => async (req, res) => {
    try {
        const data = await db.read();
        const items = data[collectionName];
        const index = items.findIndex(i => i._id === req.params.id);
        if (index === -1) return res.status(404).json({ message: 'Item not found' });

        items.splice(index, 1);
        await db.write(data);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getItems,
    getItemById,
    getItemBySlug,
    createItem,
    updateItem,
    deleteItem
};
