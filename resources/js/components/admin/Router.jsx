import { createHashRouter } from "react-router-dom";
import { MetersList } from "./MetersList";
import { MainPage } from "./MainPage";
import { Employees } from "./Employees";
import { HousesList } from "./HousesList";
import { ClientsList } from "./ClientsList";
import { EmployeesList } from "./EmployeesList";

export const Router = createHashRouter(
    [
        {
            path: "/",
            element: <MainPage/>,
            children:[
                {
                    path: "addresses",
                    element: <HousesList/>
                },
                {
                    path: "clients",
                    element: <ClientsList/>
                },
                {
                    path: "employees",
                    element: <EmployeesList/>
                },
                {
                    path: "/meters",
                    element: <MetersList/>
                }
            ]
        },
    ]
)
