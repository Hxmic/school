var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
 
var conn = mysql.createConnection(models.mysql);
conn.connect();

router.get('/query_market', function(req, res) {
    let params = req.body;

    conn.query('select * from marketsql', function(err, rows) {

        if (err || rows.length == 0) {
            console.log(err)
            res.send({data: 0})
          }else {
            res.send({data: rows})
            console.log(rows)
          }
    })
})

module.exports = router;