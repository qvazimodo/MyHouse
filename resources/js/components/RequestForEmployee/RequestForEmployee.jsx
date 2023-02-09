import React, {useState} from 'react';
import {Alert, Button, Calendar, Collapse, Select, theme} from 'antd';
import {CHECK_TIMETABLE_API_URL} from "../../helpers/API";
import './RequestForEmployee.css'
import { useNavigate} from "react-router-dom";


const OPTIONS = ['дворник', 'сантехник', 'электрик'];

function RequestForEmployee() {


    const navigate = useNavigate();

    const {Panel} = Collapse;

    const [dateCall,setDateCall] = useState();


    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const onSelect = (value) => {

        setDateCall(value.format('DD-MM-YYYY'))
    };

    const {token} = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    //-----------------------
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    const sendForm = (e) => {
        e.preventDefault()

        fetch(CHECK_TIMETABLE_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: JSON.stringify({
                date: dateCall ,
                profession: selectedItems
            })
        })
            .then(response => response.json())
            .catch(e => console.log('Request failed', e))
            .then(result =>{
                if(result[0] === 'message:Выходной день'){
                    alert('Выходной день')
                } else if(result.length >= 0) {
                    alert(`На этот дом не назначен ${selectedItems}`)
                }
                // else if (Object.keys(result.result[key][1]).length === 0){
                //     alert(`Все записи ${selectedItems} на этот день заняты`)
                // }

                else{
                    navigate("/foremployee", {state: {result,dateCall}});
                }

                }
            )

    }


    return (
        <div className="container cabinet">
            <Collapse accordion>
                <Panel header="Оформить заявку на вызов сотрудника" key="1" className="cabinet-txt cabinet-txt-time">

                        <div className='request-for-employ' style={{display: "flex", justifyContent: "space-around", alignItems: "top"}}>
                            <div style={wrapperStyle}>
                                <Calendar fullscreen={false} onSelect={onSelect} onPanelChange={onPanelChange}/>
                            </div>
                            <div style={{display:"flex", flexDirection: "column", width:'100%', maxWidth:400}}>
                                {/*mode="multiple"*/}
                                    <Select
                                    placeholder="Выберите кто вам нужен:"
                                    value={selectedItems}
                                    onChange={setSelectedItems}
                                    style={{
                                        width: '100%',
                                        marginBottom:"27%"
                                    }}
                                    options={filteredOptions.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />
                                <Button type="primary" style={{backgroundColor:'#D4C17F'}} onClick={sendForm}>Отправить</Button>
                            </div>

                        </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default RequestForEmployee;


