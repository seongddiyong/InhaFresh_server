const { pool } = require("../../../config/database");
const { errResponse } = require("../../../config/response");
const { logger } = require("../../../config/winston");

const serverDao = require("./serverDao");


// 목적지 좌표 정보 확인
exports.locationCheck = async function (arrival) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const locationCheckResult = await serverDao.selectLocation(connection, arrival);
    connection.release();

    return locationCheckResult;
  } catch (err) {
    logger.error(`locationCheck Provider error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
};