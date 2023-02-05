export const DOMEN = "http://localhost";

// маршрут получения CSRF-token текущего пользователя
export const CSRF_URL = DOMEN + "/api/auth/csrf";

export const EMPLOYEES_API_URL = DOMEN + "/api/employees";

export const CARDS_API_URL = DOMEN + "/api/cards";

export const PASSWORD_EMAIL_API_URL = DOMEN + "/api/password/email";

export const PASSWORD_CHECK_EMAIL_API_URL =  DOMEN + "/api/password/code/check";

export const PASSWORD_RESET_EMAIL_API_URL =  DOMEN + "/api/password/reset";

export const CHECK_TIMETABLE_API_URL = DOMEN + "/api/check/timetable";

export const TIMETABLE_API_URL = DOMEN + "/api/timetable";

//все объявления текущего клиента
export const CLIENT_CARDS_API_URL = DOMEN + "/api/client/cards";

export const HOUSES_API_URL = DOMEN + "/api/houses";

export const ADMIN_ADDRESSES_API_URL = DOMEN + "/api/admin/houses/addresses";

export const ADMIN_HOUSES_API_URL = DOMEN + "/api/admin/houses";

//описание дома для администратора
export const ADMIN_HOUSE_DESCRIPTION_API_URL = DOMEN + "/api/admin/houses/description";

//Сотрудники для администратора
export const ADMIN_EMPLOYEES_API_URL = DOMEN + "/api/admin/employees";

//получение массива сотрудников организации по адресу обслуживаемого объекта
export const ADMIN_EMPLOYEES_BY_ADDRESS_API_URL = DOMEN + "/api/admin/employees/by_address";

//клиенты для администратора
export const ADMIN_CLIENTS_API_URL = DOMEN + "/api/admin/clients";

//получение массива клиентов по адресу проживания
export const ADMIN_CLIENTS_BY_ADDRESS_API_URL = DOMEN + "/api/admin/clients/by_address";

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




