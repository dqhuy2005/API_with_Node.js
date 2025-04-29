const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "node",
});

async function connect() {
  await connection.connect((error) => {
    if (error) throw error;
    console.log("Kết nối MySQL thành công!");
  });
}

function query(sql, params) {
  return connection.promise().query(sql, params);
}

module.exports = {
  connect,
  query,
};
