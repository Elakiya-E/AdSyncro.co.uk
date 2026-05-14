const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '../data/database.json');

async function ensureDbExists() {
    try {
        await fs.mkdir(path.join(__dirname, '../data'), { recursive: true });
        await fs.access(DB_PATH);
    } catch {
        await fs.writeFile(DB_PATH, JSON.stringify({
            about: {},
            services: [],
            solutions: [],
            pricing: {},
            blogs: [],
            caseStudies: []
        }, null, 2));
    }
}

const db = {
    async read() {
        await ensureDbExists();
        const data = await fs.readFile(DB_PATH, 'utf8');
        return JSON.parse(data);
    },
    async write(data) {
        await ensureDbExists();
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    },
    async findCollection(collectionName) {
        const data = await this.read();
        return data[collectionName] || [];
    },
    async findOne(collectionName) {
        const data = await this.read();
        return data[collectionName];
    },
    async insert(collectionName, item) {
        const data = await this.read();
        if (Array.isArray(data[collectionName])) {
            item._id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
            data[collectionName].push(item);
        } else {
            data[collectionName] = item;
        }
        await this.write(data);
        return item;
    },
    async update(collectionName, newData) {
        const data = await this.read();
        data[collectionName] = { ...data[collectionName], ...newData };
        await this.write(data);
        return data[collectionName];
    },
    async clearAll() {
        await this.write({
            about: {},
            services: [],
            solutions: [],
            pricing: {},
            blogs: [],
            caseStudies: []
        });
    }
};

module.exports = db;
