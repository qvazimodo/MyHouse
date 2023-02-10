import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Layout, Row} from 'antd';
import "./styles/MeterList.css";
import {NavLink} from "react-router-dom";
import {fetchCollectiveMeters} from "../../features/meter/meterSlice";
import {fetchAllEmployees} from "../../features/employee/employeeSlice";


export const MetersList = () => {
    const dispatch = useDispatch()
    const collectiveMeters = useSelector(state => state.meter.collectiveMetersArray)

    useEffect(() => {
        dispatch(fetchCollectiveMeters())

        return () => {
            dispatch(fetchCollectiveMeters())
        };
    }, []);

    console.log(collectiveMeters)

    return (
        <>
            <h1>Коллективные приборы учёта</h1>
            <Row gutter={[16, 32]}>
                {collectiveMeters.map(meter => {

                    return (<Col>
                        {console.log(meter)}
                        <div className={'inner__card'}>
                            <Card
                                type="inner"
                                hoverable
                                title={meter.type}
                                extra={
                                    <Button>
                                        <NavLink to={`/meters/${meter.id}`}>Показания</NavLink>
                                    </Button>
                                }
                                style={{
                                    width: 400,
                                }}
                            >
                                <Row className={'flex justify-between'}>
                                    <Col>Номер счётчика:</Col>
                                    <Col> {meter.number}</Col>
                                </Row>
                                <Row className={'flex justify-between'}>
                                    <Col>Класс точности:</Col>
                                    <Col> {meter['accuracy_class']}</Col>
                                </Row>
                                <Row className={'flex justify-between'}>
                                    <Col>Дата изготовления:</Col>
                                    <Col> {meter['manufacturing_date']}</Col>
                                </Row>
                                <Row className={'flex justify-between'}>
                                    <Col>Дата следующей поверки:</Col>
                                    <Col> {meter['next_verification_date']}</Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>)
                })}

            </Row>
        </>
    );
}
