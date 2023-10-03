import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL;
const options = {}; // 더 이상 useNewUrlParser 옵션을 사용하지 않음
let connectDB;

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url, options).connect()
//   }
//   connectDB = global._mongo
// } else {
  
// }

connectDB = new MongoClient(url, options).connect()

export { connectDB }