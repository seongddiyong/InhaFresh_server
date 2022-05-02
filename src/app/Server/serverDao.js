// 디렉팅

// 위치 가져오기
async function selectLocation(connection, params) {
    const query =   `
                    SELECT lng, lat
                    FROM Location
                    WHERE arrival = ?
                    `

    const [row] = await connection.query(query, params);

    return row;
}

async function insertLocationInfo(connection, params) {
    const query =   `
                    INSERT lng, lat
                    INTO
                                    
    `
}

module.exports = {
    selectLocation,
}