import mysql from 'mysql2/promise';
import mongoose from 'mongoose';

let dbConnection;

// const connectDB = async (prg) => {
//   console.log('Connecting to DB...');
//   try {
//     dbConnection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'nodejs_demo',
//     });

//     console.log('DB connection successful');
//     prg();
//   } catch (e) {
//     console.log('DB connection failed');
//   }
// };


// ket noi database
const connectDB = async (prg) => {
  console.log('Connecting to DB...');
  try {
    dbConnection = await mongoose.connect('mongodb://localhost/fstfilm_db');

    console.log('DB connection successful');
    prg();
  } catch (e) {
    console.log('DB connection failed');
  }
};

export { connectDB, dbConnection };
