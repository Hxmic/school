var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
 
var conn = mysql.createConnection(models.mysql);
conn.connect();


router.post('/api/signin',(req, res) => {
    let sql = $sql.user.login;
    let params = req.body;
    
    conn.query(sql, [params.username], (err, result) => {
        if(err) {
            res.send(err);
        }
        if(result) {
            console.log(result);
            res.json(result);
        }
    })
})

router.get('/register',(req, res) => {
    let sql = $sql.user.register;
    let params = req.body;
    
    conn.query(sql, [params.username, params.userpsw], (err, result) => {
        if(err) {
            res.send(err);
        }
        if(result) {
            console.log(result)
        }
    })
})

router.get('*', (req, res) => {
    res.send('404');
})

module.exports = router;