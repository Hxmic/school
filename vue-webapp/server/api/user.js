var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
 
var conn = mysql.createConnection(models.mysql);
conn.connect();

// 可以完成登录
router.post('/login', function (req, res) {
    
    let params = req.body;

    conn.query('select username from usersql where username="' + params.username + '" and password="' + params.password+'"', function (err, rows) {
      if (err || rows.length == 0) {
        console.log(err)
        res.send({code: 0})
      }else {
        res.send({code: 1})
      }
    })
})

// 可以完成注册
router.post('/register', function(req, res) {
    let params = req.body;
    conn.query('select username from usersql where username="' + params.username + '"', function(err, rows) {
        if(err || rows.length == 0) {
            console.log(err);
            conn.query('insert into usersql set ?', {username: params.username,password:params.password}, function(err, rows) {
                if(err) {
                    console.log(err);
                    res.send({code: 0, ms: '服务器出错'})
                } else {
                    res.send({code: 1})
                }
            })
        } else {
            res.send({code: 0, ms: '账户已存在'})
        }
    })
})
// 可以完成删除
router.post('/delete_user', function(req, res) {
    let params = req.body;

    conn.query('select username from usersql where username="' + params.username + '"', function(err, rows) {
        if(err || rows.length == 0) {
            res.send({code: 0, ms: '账户不存在'})
            console.log(err);
        } else {
            conn.query('delete from usersql where username="' + params.username + '"', function(err, rows) {
                if(err) {
                    console.log(err)
                    res.send({code: 0})
                } else {
                    res.send({code: 1});
                }
            })
        }
    })
})
// 可以完成修改（写法有点复杂）
router.post('/update_user', function(req, res) {
    let params = req.body;
    
    conn.query('update usersql set username = "'+params.username + '" ,password = "' + params.password + '" where username = "' + params.username + '"', function(err, result) {
        !err ? res.send({code: 1}) : res.send({code: 0})

    })

})

// router.get('/register',(req, res) => {
//     let sql = $sql.user.register;
//     let params = req.body;
    
//     conn.query(sql, [params.username, params.userpsw], (err, result) => {
//         if(err) {
//             res.send(err);
//         }
//         if(result) {
//             console.log(result)
//         }
//     })
// })

router.get('*', (req, res) => {
    res.send('404');
})

module.exports = router;