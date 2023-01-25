import { createHashRouter } from "react-router-dom";
import { MetersList } from "./MetersList";
import { MainPage } from "./MainPage";
import { Employees } from "./Employees";
import { HousesList } from "./HousesList";

export const Router = createHashRouter(
    [
        {
            path: "/",
            element: <MainPage/>,
            children:[
                {
                    path: "houses",
                    element: <HousesList/>
                },
                {
                    path: "clients",
                    element: <Employees/>
                },
                {
                    path: "employees",
                    element: <Employees/>
                },
                {
                    path: "/meters",
                    element: <MetersList/>
                }
            ]
        },
    ]
)
