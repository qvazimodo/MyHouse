import {Provider} from "react-redux"
import store from "../../../store"
import {HousePageLayout} from "./HousePageLayout"
import {HousesList} from "../HousesPage/HousesList";

export const Root = () => {
    return (
        <Provider store={store}>
            <HousePageLayout>
                <HousesList/>
            </HousePageLayout>
        </Provider>

    )
}
