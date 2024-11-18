const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (username, password, role)
                        VALUES ('${body.username}', '${body.password}', '${body.role}')`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE users 
                        SET name='${body.username}', password='${body.password}', role='${body.role}',
                        WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id='${idUser}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
