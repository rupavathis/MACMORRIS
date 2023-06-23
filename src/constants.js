const REACT_APP_ROOT_URL = process.env.REACT_APP_ROOT_URL || "";
const REACT_APP_API_PREFIX = process.env.REACT_APP_API_PREFIX || "";

export const ROOT_URL = REACT_APP_ROOT_URL;
export const API_URL = `${ROOT_URL}${REACT_APP_API_PREFIX}`
