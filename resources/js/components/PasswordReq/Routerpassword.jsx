import {createHashRouter} from "react-router-dom";

import PasswordReq from "./PasswordReq";
import CodePassword from "./CodePassword";
import NewPassword from "./NewPassword";

export const Routerpassword = createHashRouter(
    [
        {
            path: "/",
            element: <PasswordReq/>,
        },
        {
            path: "passwordCode",
            element: <CodePassword/>
        },
        {
            path: "passwordNew",
            element: <NewPassword/>
        }
    ]
)
