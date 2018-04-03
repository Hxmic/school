var sqlMap = {
    user: {
        login: 'select * from admin;',
        register: 'insert into admin(username, userpsw) values(?, ?)',
    }
}



module.exports = sqlMap;