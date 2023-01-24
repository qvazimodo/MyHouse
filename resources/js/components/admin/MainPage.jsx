import { NavLink } from "react-router-dom";
import store from "../../store";
import { ConfigProvider, theme } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import { HousePageLayout } from "./HousesPage/HousePageLayout";
import { HousesList } from "./HousesPage/HousesList";
import { Provider } from "react-redux";

export const MainPage = ()=>{
    return(
        <Provider store={ store }>
            <ConfigProvider
                locale={ ruRu }
                theme={ {
                    algorithm: theme.darkAlgorithm,
                } }>

                <HousePageLayout>
                    <NavLink to="/meters" replace>Meters</NavLink>
                    <HousesList/>
                </HousePageLayout>

            </ConfigProvider>
        </Provider>

    )
}
