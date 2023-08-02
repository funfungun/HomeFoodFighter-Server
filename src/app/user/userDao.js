// 유저 삽입
async function insertUser(connection, insertUserParams) {
    const insertUserQuery =`
              INSERT INTO User (id, password, nickname, name, birth, email, state, salt)
              VALUES (?, ?, ?, ?, ?, ?, 1, ?);
                `;
                
    const insertUserRow = await connection.query(
        insertUserQuery,
        insertUserParams
    );

    return insertUserRow;
}

async function selectUserId(connection, id) {
    const selectUserIdQuery = `
                    SELECT id
                    FROM User
                    WHERE id = ?;
                    `;
    const [idRows] = await connection.query(selectUserIdQuery, id);
    return idRows;
}

// id와 password로 유저 조회
async function selectUserPassword(connection, selectUserPasswordParams){
    console.log(selectUserPasswordParams)
    const selectPasswordQuery = `
        SELECT userId, id, nickname, password, salt
        FROM User
        WHERE id = ?;
    `;
    
    const selectUserPasswordRow = await connection.query(
        selectPasswordQuery,
        selectUserPasswordParams
    );
    
    return selectUserPasswordRow;
}

async function selectUserAccount(connection, id) {
    const selectUserAccountQuery = `
        SELECT userId, id, state 
        FROM User
        WHERE id = ?    
    `
    const selectUserAccountRow = await connection.query(
        selectUserAccountQuery,
        id
    );
    return selectUserAccountRow[0];
}

async function selectUserNickname(connection, nickname){
    const selectUserNicknameQuery = `
                    SELECT id, nickname
                    FROM User
                    WHERE nickname = ?;
                    `;
    const [nicknameRows] = await connection.query(selectUserNicknameQuery, nickname);
    return nicknameRows;
  
  }

async function selectUserEmail(connection, email){
    const selectUserEmailQuery = `
                    SELECT email
                    FROM User
                    WHERE email = ?;
                    `;
    const [emailRows] = await connection.query(selectUserEmailQuery, email);
    return emailRows;
  
  }

async function idGet(connection, email) {
    const selectUserIdQuery = `
                    SELECT id
                    FROM User
                    WHERE email = ?;
                    `;
    const [idRows] = await connection.query(selectUserIdQuery,email);
    return idRows;
}

async function passwordGet(connection, email) {
    const selectUserPasswordQuery = `
                    SELECT password
                    FROM User
                    WHERE email = ?;
                    `;
    const [passwordRows] = await connection.query(selectUserPasswordQuery,email);
    return passwordRows;
}


async function getUserByIdGet(connection, id) {
    const selectUserQuery = `
                    SELECT userid
                    FROM User
                    WHERE id = '${id}';
                    `;
    const userRows = await connection.query(selectUserQuery);
    return userRows;
}


async function getStateById(connection, id) {
    const selectUserStateQuery = `
                    SELECT state
                    FROM User
                    WHERE id = '${id}';
                    `;
    const [stateRows] = await connection.query(selectUserStateQuery);
    return stateRows;
}


module.exports = {
    insertUser,
    selectUserId,
    selectUserPassword,
    selectUserAccount,
    selectUserNickname,
    selectUserEmail,
    idGet,
    passwordGet,
    getUserByIdGet,
    getStateById,
};  