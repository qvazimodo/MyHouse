import React, {useState} from 'react';
import {Button, Cascader, Collapse} from "antd";
import {TIMETABLE_API_URL} from "../../helpers/API";

import './RequestForEmployee.css'
import {useLocation, useNavigate} from "react-router-dom";


const RequestForEmployeeTime = () => {

    const profTime = useLocation();
    const navigate = useNavigate();

    const [valueProfTime, setValueProfTime] = useState([]);

    const options = [];
    let arraychildren = [];
    let objkeys = {};

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
                    arraychildren = [];
                    objkeys = {};
                    navigate("/");
                }
            )

    }

    const onChange = (value) => {
        setValueProfTime(value);
    };

    const checkTimes = (e) => {
        let countchildren = [];
        let objchildren = {};
        let timework = '';
        for (let valuechildren in e) {
            switch (e[valuechildren]) {
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
                    return alert('Всё занято');
                    break;
            }
            objchildren = {
                value: +valuechildren + 1,
                label: timework
            }
            countchildren.push(objchildren);
        }
        return countchildren = {
            children: countchildren
        };
    };


    for (let key in profTime.state.result) {
        arraychildren = [];
        objkeys = {
            value: key,
            label: `${profTime.state.result[key][0].name} ${profTime.state.result[key][0].last_name}`,
        }

        arraychildren = checkTimes(profTime.state.result[key][1]);

        Object.assign(objkeys, arraychildren);
        options.push(objkeys);
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
