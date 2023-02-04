import {createHashRouter} from "react-router-dom";

import RequestForEmployeeTime from "./RequestForEmployeeTime";
import RequestForEmployee from "./RequestForEmployee";

export const RouterRequestForEmployee = createHashRouter(
    [
        {
            path: "/",
            element: <RequestForEmployee/>,
        },
        {
            path: "passwordCode",
            element: <RequestForEmployeeTime/>
        }
    ]
)
