import {EmployeesList,} from "./EmployeesList";
import {EmployeeRegistration} from "./EmployeeRegistration";
import {useState} from "react";
import {ConfigProvider, Button, theme} from "antd";
import ruRu from 'antd/lib/locale/ru_RU';


export const Employees = () => {
    const [showList, setShowList] = useState(false)
    const [showRegistrationForm, setShowRegistrationForm] = useState(true)
    return (
        <ConfigProvider
            locale={ruRu}
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
            {showRegistrationForm && <EmployeeRegistration
                setShowRegistrationForm={setShowRegistrationForm}/>}
        </ConfigProvider>
    )

}
