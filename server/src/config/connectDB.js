import mysql from 'mysql2/promise';

let dbConnection;

const connectDB = async (prg) => {
  console.log('Connecting to DB...');
  try {
    dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'nodejs_demo',
    });

    console.log('DB connection successful');
    prg();
  } catch (e) {
    console.log('DB connection failed');
  }
};

export { connectDB, dbConnection };
