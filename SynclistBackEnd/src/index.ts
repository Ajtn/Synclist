import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { Connection } from "mysql";

const http = require('http');
const mysql = require('mysql');

const server = http.createServer((req: Http2ServerRequest, res: Http2ServerResponse) => {
    require('dotenv').config();
    const connection: Connection = mysql.createConnection({
        host: process.env.SYNCLIST_DB_HOST,
        user: process.env.SYNCLIST_DB_USER,
        password: process.env.SYNCLIST_DB_PASS,
        database: process.env.SYNCLIST_DB
    });
    connection.connect(err => {
        if (err) {
            console.log(err);
        }
        console.log(`connected as id ${connection.threadId}`)
    });
    console.log(connection.query('INSERT INTO songs SET ?', {song_id: 1, name: "test name", artist: "test artist", album: "test album", duration: 11}, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Data succesfully added with ID: ${results.insertId}`);
        }
    }));
    if (req.method === "POST") {
        res.statusCode = 200;
        res.write('Data successfully added');
        res.end();
    } else if (req.method === "GET") {
        //Check request arg, fetch appropriate data
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is online and listening to port ${PORT}`));