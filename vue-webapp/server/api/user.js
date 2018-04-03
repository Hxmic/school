var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
 
var conn = mysql.createConnection(models.mysql);
conn.connect();


router.get('/signin',(req, res) => {
    let sql = $sql.user.login;
    let params = req.body;
    
    conn.query(sql, [params.username, params.userpsw], (err, result) => {
        if(err) {
            res.send(err);
        }
        if(result) {
            console.log(result);
            res.json({status:200,data:result});
        }
    })
})

router.get('*', (req, res) => {
    res.send('404');
})

module.exports = router;