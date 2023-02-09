import { createHashRouter } from "react-router-dom";
import { MetersList } from "./MetersList";
import { MainPage } from "./MainPage";
import { HousesList } from "./HousesList";
import { ClientsList } from "./ClientsList";
import { EmployeesList } from "./EmployeesList";
import { MeterValuesTable } from "./MeterValuesTable";
import { EmployeesListForSelectedAddress } from './EmployeesListForSelectedAddress'
import { HouseDescripiton } from "./HouseDescripiton";
import { ClientsListForSelectedAddress } from "./ClientsListForSelectedAddress";
import {MetersListForSelectedAddress} from "./MetersListForSelectedAddress";

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
                    path: "clients/:streetId/:houseId",
                    element: <ClientsListForSelectedAddress/>
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
                    path: "employees/:streetId/:houseNumberId",
                    element: <EmployeesListForSelectedAddress/>
                },
                {
                    path: "meters",
                    element: <MetersList/>,
                },
                {
                    path: "meters/:streetId/:houseId",
                    element: <MetersListForSelectedAddress/>,

                },
                {
                    path: "meters/:houseAddressId/:meterId",
                    element: <MeterValuesTable/>,
                },
                {
                    path: "meters/:meterId",
                    element: <MeterValuesTable/>,
                }

            ]
        },
    ]
)
