export const DOMEN = "http://localhost";

// маршрут получения CSRF-token текущего пользователя
export const CSRF_URL = DOMEN + "/api/auth/csrf";

export const EMPLOYEES_API_URL = DOMEN + "/api/employees";

export const CARDS_API_URL = DOMEN + "/api/cards";

//все объявления текущего клиента
export const CLIENT_CARDS_API_URL = DOMEN + "/api/client/cards";

export const HOUSES_API_URL = DOMEN + "/api/houses";

export const ADMIN_HOUSES_API_URL = DOMEN + "/api/admin/houses";

//описание дома для администратора
export const ADMIN_HOUSE_DESCRIPTION_API_URL = DOMEN + "/api/admin/houses/description";

// маршрут получения текущего пользователя
export const AUTH_USER_API_URL = DOMEN + "/api/auth/auth_user";

// маршрут получения показаний всех счетчиков текущего клиента
export const AUTH_METERS_LIST_API_URL = DOMEN + "/api/client_meters";

// маршрут получения показаний всех счетчиков текущего клиента
export const AUTH_METERS_API_URL = DOMEN + "/api/client_meters/values";

// маршрут получения показаний всех счетчиков всех клиентов
export const ALL_METERS_VALUES_API_URL = DOMEN + "/api/admin/meters/values";

//маршрут передачи показаний счетчика методом POST
export const METER_VALUE_API_URL = DOMEN + "/api/meters";




