export const DOMEN = "http://localhost";

// маршрут получения CSRF-token текущего пользователя
export const CSRF_URL = DOMEN + "/api/auth/csrf";

export const EMPLOYEES_API_URL = DOMEN + "/api/employees";

export const CARDS_API_URL = DOMEN + "/api/cards";

export const PASSWORD_EMAIL_API_URL = DOMEN + "/api/password/email";

export const PASSWORD_CHECK_EMAIL_API_URL =  DOMEN + "/api/password/code/check";

export const PASSWORD_RESET_EMAIL_API_URL =  DOMEN + "/api/password/reset";

//все объявления текущего клиента
export const CLIENT_CARDS_API_URL = DOMEN + "/api/client/cards";

export const HOUSES_API_URL = DOMEN + "/api/houses";

export const ADMIN_HOUSES_API_URL = DOMEN + "/api/admin/houses";

//описание дома для администратора
export const ADMIN_HOUSE_DESCRIPTION_API_URL = DOMEN + "/api/admin/houses/description";

//клиенты для администратора
export const ADMIN_CLIENTS_ADVANCED_API_URL = DOMEN + "/api/admin/clients/advanced";

// маршрут получения текущего пользователя
export const AUTH_USER_API_URL = DOMEN + "/api/auth/auth_user";

//получение массива клиентов по адресу проживания
export const ADMIN_CLIENTS_BY_ADDRESS_API_URL = DOMEN + "/api/admin/clients/by_address";

// маршрут получения показаний всех счетчиков текущего клиента
export const AUTH_METERS_LIST_API_URL = DOMEN + "/api/client_meters";

// маршрут получения показаний всех счетчиков текущего клиента
export const AUTH_METERS_API_URL = DOMEN + "/api/client_meters/values";

// маршрут получения показаний всех счетчиков всех клиентов
export const ALL_METERS_VALUES_API_URL = DOMEN + "/api/admin/meters/values";

//маршрут передачи показаний счетчика методом POST
export const METER_VALUE_API_URL = DOMEN + "/api/meters";




