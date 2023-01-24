import { createHashRouter } from "react-router-dom";
import { Root } from "./Root";
import { MetersList } from "./MetersList";

export const Router = createHashRouter( [
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "meters",
                element: <MetersList/>
            }
        ]
    },

] )
