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
    conn.query('select aname from adminsql where aname="' + params.username + '" and apwd="' + params.password+'"', function (err, rows) {
      if (err || rows.length == 0) {
        console.log(err)
        res.send({code: 0})
      }else {
        res.send({code: 1})
        console.log(rows)
      }
    })
})
// 通过用户名查找用户 
router.post('/query_uname', function(req, res) {
    let params = req.body;
    conn.query('select * from adminsql where aname = "' +params.aname +'"', function(err, result) {
        if (err ) {
            res.send({data: 0})
        }else {
            res.json(result)
            console.log(result)
          }
    })
})

// 修改个人信息
router.post('/upd_admin',function(req, res) {
    let params = req.body;
    
    conn.query('update adminsql set aname = "'+params.name + '" ,apwd = "' + params.pwd + '",asex = "' + params.sex + '" ,aemail = "' + params.email + '" ,abirth = "' + params.birth +'"where aid = "' + params.aid + '"', function(err, result) {
        !err ? res.send({code: 1}) : res.send({code: 0})

    })
})
// 查询用户
router.get('/query_admin', function(req, res) {
    let params = req.body;
    conn.query('select * from adminsql', function (err, rows) {
        console.log(rows)
        if (err || rows.length == 0) {
          console.log(err)
          res.send({data: 0})
        }else {
          res.send({data: rows})
          console.log(rows)
        }
      })
})

// 删除用户
router.post('/del_admin',function(req,res) {
    let params = req.body;
    conn.query('delete from adminsql where aid="' + params.aid + '"', function(err, rows) {
        if(err) {
            console.log(err)
            res.send({code: 0})
        } else {
            res.send({code: 1});
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

// 查询商品信息
router.get('/sel_goods', function (req, res) {
    
    let params = req.body;

    conn.query('select * from goodssql', function (err, rows) {
      console.log(rows)
      if (err || rows.length == 0) {
        console.log(err)
        res.send({data: 0})
      }else {
        res.send({data: rows})
        console.log(rows)
      }
    })
})

// 删除商品信息
router.post('/del_goods',function(req,res) {
    let params = req.body;
    conn.query('delete from goodssql where gid="' + params.gid + '"', function(err, rows) {
        if(err) {
            console.log(err)
            res.send({code: 0})
        } else {
            res.send({code: 1});
        }
    })
})
// 修改商品信息
router.post('/upd_goods',function(req, res) {
    let params = req.body;
    
    conn.query('update goodssql set gname = "'+params.name + '" ,gdescribe = "' + params.describe + '",gprice = "' + params.price + '" ,glocation = "' + params.location + '"where gid = "' + params.gid + '"', function(err, result) {
        !err ? res.send({code: 1}) : res.send({code: 0})

    })
})
// 按条件查询商品
router.post('/query_goods', function(req, res) {
    let params = req.body;
    conn.query('select * from goodssql where gname like "%' + params.name + '%"', function (err, rows) {
        if (err || rows.length == 0) {
            console.log(err)
            res.send({data: 0})
        } else {
            res.send({data: rows})
            console.log(rows)
        }
    })
})

router.post('/query_disgoods', function(req, res) {
    let params = req.body;

    conn.query('select * from goodssql where gname="' + params.name + '" and gdiscount > "' + params.discount + '"', function (err, rows) {
        if (err || rows.length == 0) {
            console.log(err)
            res.send({data: 0})
        } else {
            res.send({data: rows})
            console.log(rows)
        }
    })
})

// 添加商品

router.post('/add_goods', function(req,res) {
    let params = req.body;
    conn.query('insert into goodssql set ?', {gname: params.name,gdescribe:params.describe,gprice:params.price,gsale:params.sale,gdate:params.date,glocation:params.location,gperson:params.location}, function(err, rows) {
        if(err) {
            console.log(err);
            res.send({code: 0, ms: '服务器出错'})
        } else {
            res.send({code: 1})
        }
    })
})
// 查重推广活动
router.post('/query_market', function(req,res) {
    let params = req.body;
    conn.query('select * from merchant where gvideo="' + params.video + '"', function (err, result) {
        if(err) {
            console.log(err);
            res.send({code: 0, ms: '服务器出错'})
        } else {
            res.json(result)
        }
    })
})

router.get('*', (req, res) => {
    res.send('404');
})

module.exports = router;