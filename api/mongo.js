const { MongoClient, ObjectID } = require('mongodb')

const DATABASE_NAME = process.env.DATABASE_NAME || 'stack-poc'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/'

let db

MongoClient.connect(DATABASE_URL + DATABASE_NAME, function (err, database) {
	if (err) {
		console.error('Unable to connect to mongo server.', err)
	} else {
		db = database.db(DATABASE_NAME)
		console.log('=====> Connected to mongo server:', DATABASE_URL + DATABASE_NAME);
	}
})

const create = async (collection, value) => {
	var r = await db.collection(collection).insertOne(value)
	var i = await db.collection(collection).find({ _id: r.insertedId }).toArray()
	return i[0]
}

const read = async (collection, filter) => {
	var r = await db.collection(collection).find(filter).toArray()
	return r[0]
}

const readMany = async (collection, filter) => {
	return await db.collection(collection).find(filter).toArray()
}

module.exports = { create, read, readMany }
