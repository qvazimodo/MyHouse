import { createHashRouter } from "react-router-dom";
import { MetersList } from "./MetersList";
import { MainPage } from "./MainPage";
import { HousesList } from "./HousesList";
import { ClientsList } from "./ClientsList";
import { EmployeesList } from "./EmployeesList";
import { MeterValuesTable } from "./MeterValuesTable";
import { EmployeesListForSelectedAddress } from './EmployeesListForSelectedAddress'
import { HouseDescripiton } from "./HouseDescripiton";

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
                    path: "addresses/:streetId/:houseId",
                    element: <HouseDescripiton/>
                },
                {
                    path: "employees",
                    element: <EmployeesList/>
                },
                {
                    path: "employees/:streetId/:houseId",
                    element: <EmployeesListForSelectedAddress/>
                },
                {
                    path: "meters",
                    element: <MetersList/>,

                },
                {
                    path: "meters/:houseAddressId/:meterId",
                    element: <MeterValuesTable/>,
                }

            ]
        },
    ]
)
