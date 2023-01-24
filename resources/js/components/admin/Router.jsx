import { createHashRouter } from "react-router-dom";
import { MetersList } from "./MetersList";
import { MainPage } from "./MainPage";

export const Router = createHashRouter(
    [
        {
            path: "/",
            element: <MainPage/>,
        },
        {
            path: "/meters",
            element: <MetersList/>
        } ]
)
