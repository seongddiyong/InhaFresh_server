const jwtMiddleware = require("../../../config/jwtMiddleware");
const serverProvider = require("../../app/Server/serverProvider");
// const userService = require("../../app/User/userService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const logger = require("../../../config/winston");
const crypto = require("crypto");
const regexEmail = require("regex-email");

const jwt = require('../../../modules/jwt');
const KakaoStrategy = require("passport-kakao").Strategy;
const axios = require("axios");
const passport = require("passport");