import React, {useEffect, useState} from 'react';
import {Button, Calendar, Cascader, Collapse, Select, Space, Table, Tag} from "antd";
import {ALL_METERS_VALUES_API_URL, CHECK_TIMETABLE_API_URL, TIMETABLE_API_URL} from "../../helpers/API";

import './RequestForEmployee.css'
import {useLocation} from "react-router-dom";


const RequestForEmployeeTime = () => {

    const profTime = useLocation();

    const [valueProfTime, setValueProfTime] = useState([]);
    // const [options, setOptions] = [];

    const {Panel} = Collapse;

    const sendForm = (e) => {
        e.preventDefault()

        fetch(TIMETABLE_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: JSON.stringify({
                date: profTime.state.dateCall,
                employer_id: valueProfTime[0],
                time_window_id: valueProfTime[1]
            })
        })
            .then(response => response.json())
            .catch(e => console.log('Request failed', e))
            .then(result => {
                    console.log(result)
                }
            )

    }

    const onChange = (value) => {
        setValueProfTime(value);
        console.log(value);
    };

    const options = [];
    let arraychildren = [];
    let objkeys = {};
    let objchildren = {};
    let timework = '';
    let objschildren = {};
    let returnedTarget = {};

    for (let key in profTime.state.result) {

        objkeys = {
            value: key,
            label: `Работник под номером: ${key}`,
        }

        arraychildren = [];
        for (let valuechildren of profTime.state.result[key]) {
            switch (valuechildren) {
                case 1:
                    timework = '9:00-11:00';
                    break;
                case 2:
                    timework = '11:00-13:00';
                    break;
                case 3:
                    timework = '13:00-15:00';
                    break;
                case 4:
                    timework = '15:00-17:00';
                    break;
                default:
                    alert('Всё занято');
                    break;
            }
            objchildren = {
                value: valuechildren,
                label: timework
            }
            arraychildren.push(objchildren)

        }
        options.push(objkeys);
        objschildren = {
            children: arraychildren
        }
        returnedTarget = Object.assign(objkeys, objschildren);
    }



    return (
        <div className="container">
            <Collapse className='color-panel-date-time' accordion>
                <Panel header="Выберите время и сотруданика" key="1" className="cabinet-txt">
                    <div style={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: 'center'}}>
                        <Cascader placeholder={'Выберите работника:'}
                                  style={{maxWidth: 500, width: "100%", marginBottom: 20}} options={options}
                                  onChange={onChange} changeOnSelect/>
                        <Button type="primary" style={{backgroundColor: '#D4C17F', maxWidth: 500, width: "100%"}}
                                onClick={sendForm}>Отправить</Button>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default RequestForEmployeeTime;
