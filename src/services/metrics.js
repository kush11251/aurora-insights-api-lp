const MongoDB = require('mongodb');
const client = new MongoDB.MongoClient('mongodb://localhost:27017');
async function getMetrics() {
    const db = client.db();
    const collection = db.collection('metrics');
    const metrics = await collection.find().toArray();
    return metrics;
}
module.exports = { getMetrics }