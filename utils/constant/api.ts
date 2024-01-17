/***
API CONSTANTS  
***/
const SERVER_BASE_URL = "http://10.0.2.2:5050/api"; // "http://localhost:5050/api";
const AUTH = "/auth";
const SIGNUP_API = `${SERVER_BASE_URL}${AUTH}/register`;
const LOGIN_API = `${SERVER_BASE_URL}${AUTH}/login`;

export {
    SIGNUP_API,
    LOGIN_API
}
