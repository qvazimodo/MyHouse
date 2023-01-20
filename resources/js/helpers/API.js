export const API_URL = "http://localhost";

// маршрут получения CSRF-token текущего пользователя
export const CSRF_URL = API_URL + "/api/auth/csrf";

export const EMPLOYEES_API_URL = API_URL + "/api/employees";

export const CARDS_API_URL = API_URL + "/api/cards";

//все объявления текущего клиента
export const CLIENT_CARDS_API_URL = API_URL + "/api/client/cards";

export const HOUSES_API_URL = API_URL + "/api/houses";

// маршрут получения текущего пользователя
export const AUTH_USER_API_URL = API_URL + "/api/auth/auth_user";

// маршрут получения показаний всех счетчиков текущего клиента
export const AUTH_METERS_LIST_API_URL = API_URL + "/api/client_meters";

// маршрут получения показаний всех счетчиков текущего клиента
export const AUTH_METERS_API_URL = API_URL + "/api/client_meters/values";

// маршрут получения показаний всех счетчиков всех клиентов
export const ALL_METERS_VALUES_API_URL = API_URL + "/api/admin/meters/values";

//маршрут передачи показаний счетчика методом POST
export const METER_VALUE_API_URL = API_URL + "/api/meters";


