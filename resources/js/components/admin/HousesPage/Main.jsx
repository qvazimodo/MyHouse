import { Provider } from "react-redux"
import store from "../../../store"
import { HashRouter } from "react-router-dom";
import { HousePageLayout } from "./HousePageLayout"
import { HousesList } from "../HousesPage/HousesList";
import { ConfigProvider, theme } from "antd";
import ruRu from "antd/lib/locale/ru_RU";

export const Main = () => {
    return (
        <Provider store={ store }>
            <ConfigProvider
                locale={ ruRu }
                theme={ {
                    algorithm: theme.darkAlgorithm,
                } }>

                    <HousePageLayout>
                        <HousesList/>
                    </HousePageLayout>

            </ConfigProvider>
        </Provider>

    )
}
