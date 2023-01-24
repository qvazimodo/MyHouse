import { Provider } from "react-redux"
import store from "../../../store"
import { Router } from "./Router"
import { HousePageLayout } from "./HousePageLayout"
import { HousesList } from "../HousesPage/HousesList";
import { ConfigProvider, theme } from "antd";
import ruRu from "antd/lib/locale/ru_RU";

export const Root = () => {
    return (
        <Provider store={ store }>
            <ConfigProvider
                locale={ ruRu }
                theme={ {
                    algorithm: theme.darkAlgorithm,
                } }>
                <Router>
            {/*        <HousePageLayout>
                        <HousesList/>
                    </HousePageLayout>*/}
                </Router>
            </ConfigProvider>
        </Provider>

    )
}
