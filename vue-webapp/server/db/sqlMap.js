var sqlMap = {
    user: {
        login: 'select username from admin where username = ?;',
        register: 'insert into admin(username, userpsw) values(?, ?)',
    }
}



module.exports = sqlMap;