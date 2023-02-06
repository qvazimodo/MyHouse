import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Layout, Row } from 'antd';
import "./styles/MeterList.css";
import { NavLink } from "react-router-dom";
import {setCurrentMeter} from '../../features/house/houseSlice'


const { Header, Content, Footer, Sider } = Layout;
export const MetersList = () => {
    const dispatch = useDispatch()
    const meters = useSelector( state => state.house.meters )
    const addresses = useSelector( state => state.house.addresses )

    return (
        <>
            <Row gutter={ [ 16, 32 ] }>
                { Object.keys( meters ).map( key => {
                    return (
                        <Card
                            title={ 'Улица ' + addresses[key]['streetName'] + ', дом №' + addresses[key]['houseNumber'] }
                            className={ 'bg-neutral-200' }
                        >
                            <Row key={ key }>
                                { console.log( key, addresses[key] ) }
                                <Row gutter={ [ 16, 16 ] }>
                                    { meters[key].map( meter => {
                                        return (<Col>
                                            { console.log( key, meter ) }
                                            <div className={'inner__card'}>
                                                <Card
                                                    type="inner"
                                                    hoverable
                                                    title={ meter.type }
                                                    extra={
                                                    <Button onClick={()=>dispatch(setCurrentMeter(meter))}>
                                                        <NavLink to={`/meters/${key}/${meter.id}`}>Показания</NavLink>
                                                    </Button>
                                                    }
                                                    style={ {
                                                        width: 300,
                                                    } }
                                                >
                                                    <Row className={ 'flex justify-between' }>
                                                        <Col>Номер счётчика:</Col>
                                                        <Col> { meter.number }</Col>
                                                    </Row>
                                                    <Row className={ 'flex justify-between' }>
                                                        <Col>Класс точности:</Col>
                                                        <Col> { }</Col>
                                                    </Row>
                                                    <Row className={ 'flex justify-between' }>
                                                        <Col>Дата изготовления:</Col>
                                                        <Col> { }</Col>
                                                    </Row>
                                                    <Row className={ 'flex justify-between' }>
                                                        <Col>Дата следующей поверки:</Col>
                                                        <Col> { }</Col>
                                                    </Row>
                                                </Card>
                                            </div>
                                        </Col>)
                                    } ) }
                                </Row>
                            </Row>
                        </Card>
                    )
                } ) }
            </Row>
        </>
    );
}
