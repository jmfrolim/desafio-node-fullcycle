const express = require('express');
const app = express();

const port = process.env.APP_PORT || 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const mysql = require('mysql');

const connection = mysql.createConnection(config);

app.get('/', (__req, res) => {


  connection.query(`INSERT INTO people (name) VALUES ('Joao Marcos')`);

  connection.query(`SELECT name FROM people`, (__error, results, __fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${
          !!results.length
            ? results.map((el) => `<li>${el.name}</li>`).join('')
            : ''
        }
      </ol>
    `);
  });
});

app.listen(port, () => {
  console.log('Up on:', port);
});