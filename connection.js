var mysql = require('mysql');

// For jawsDB
var connection;
if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        host: 'q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'eaqoimawy9z8xxwb',
        password: 'wyyoqpy2lmm6d6cw',
        database: 'w42dj4cpjq3w0emd'
    });
};


connection.connect();
module.exports = connection;