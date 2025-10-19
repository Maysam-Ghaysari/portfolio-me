// db.js
const mongoose = require("mongoose");

const uri = process.env.MONGO_URL; 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, options).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectToDB;
