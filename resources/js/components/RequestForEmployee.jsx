import React from 'react';
import { Collapse } from 'antd';

function RequestForEmployee() {

    const { Panel } = Collapse;

    return (
        <div className="container">
            <Collapse accordion>
                <Panel header="Оформить заявку на вызов сотрудника" key="1" className="cabinet-txt">
                    <p>Здесь будет форма</p>
                </Panel>
            </Collapse>

        </div>
    );
}

export default RequestForEmployee;


