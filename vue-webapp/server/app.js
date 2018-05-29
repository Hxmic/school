const userApi = require('./api/user');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//注册api路由
app.use('/api', userApi);
// 监听端口
app.listen(8082);
console.log('success listen at port:8082......');