import { createHashRouter } from "react-router-dom";
import { MetersList } from "./MetersList";
import { MainPage } from "./MainPage";
import { Employees } from "./Employees";

export const Router = createHashRouter(
    [
        {
            path: "/",
            element: <MainPage/>,
            children:[
                {
                    path: "employees/",
                    element: <Employees/>
                }
            ]
        },
        {
            path: "/meters",
            element: <MetersList/>
        } ]
)
