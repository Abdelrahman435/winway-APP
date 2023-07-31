const mysql = require("mysql");

// const db_config = {
//   host: "bykoxpxsybzqzwzbmww8-mysql.services.clever-cloud.com",
//   user: "u4ptjd6izxqtlgbq",
//   password: "rQq9qDfi7NrQAFtGg1LW",
//   database: "bykoxpxsybzqzwzbmww8",
//   port: "3306",
// };

// let connection = mysql.createConnection({
//   host: "bykoxpxsybzqzwzbmww8-mysql.services.clever-cloud.com",
//   user: "u4ptjd6izxqtlgbq",
//   password: "rQq9qDfi7NrQAFtGg1LW",
//   database: "bykoxpxsybzqzwzbmww8",
//   port: "3306",
// });

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db",
  port: "3306",
});

// function handleDisconnect() {
//   connection = mysql.createConnection({
//     host: "bykoxpxsybzqzwzbmww8-mysql.services.clever-cloud.com",
//     user: "u4ptjd6izxqtlgbq",
//     password: "rQq9qDfi7NrQAFtGg1LW",
//     database: "bykoxpxsybzqzwzbmww8",
//     port: "3306",
//   });
//   connection.connect((err) => {
//     if (err) throw err;
//     console.log("DB CONNECTED");
//   });

//   connection.on("error", function (err) {
//     console.log("db error", err);
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }

  connection.connect((err) => {
    if (err) throw err;
    console.log("DB CONNECTED");
  });

// handleDisconnect();
module.exports = { connection };
