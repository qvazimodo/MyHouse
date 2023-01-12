import {EmployeesList,} from "./EmployeesList";
import {EmployeeRegisterForm,} from "./EmployeeRegisterForm";
import {useState} from "react";
import {ConfigProvider, Button, theme} from "antd";


export const Employees = () => {
    const [showList, setShowList] = useState(true)
    const [showRegistrationForm, setShowRegistrationForm] = useState(false)
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
            // style={{ background: "gold",
            // borderColor: "gold",
            // color: "gold",
            // fontFamily: "Raleway" }}
        >
            {!showList && <Button onClick={() => {
                console.log('click')
                setShowList(true)
                setShowRegistrationForm(false)
            }}>Список сотрудников</Button>}

            {!showRegistrationForm && <Button onClick={() => {
                console.log('click')
                setShowRegistrationForm(true)
                setShowList(false)
            }}>Зарегистрировать нового сотрудника</Button>}

            {showList && <EmployeesList/>}
            {showRegistrationForm && <EmployeeRegisterForm/>}
        </ConfigProvider>
    )

}
