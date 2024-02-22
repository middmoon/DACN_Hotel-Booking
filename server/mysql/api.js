
const mysql = require('./ImportData_vn_units.sql');

const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'liem122003',
  database: 'ImportData_vn_units',
});

connection.connect();

// Lấy dữ liệu từ MySQL
connection.query('SELECT * FROM table_name', (error, results) => {
  if (error) {
    throw error;
  }

  // Gửi dữ liệu đến Frontend
  res.json(results);
});

connection.end();
