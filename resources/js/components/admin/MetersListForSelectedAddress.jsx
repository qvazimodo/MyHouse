import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Layout, Row} from 'antd';
import "./styles/MeterList.css";
import {NavLink, useParams} from "react-router-dom";
import {setCurrentMeter} from '../../features/house/houseSlice'


const {Header, Content, Footer, Sider} = Layout;
export const MetersListForSelectedAddress = () => {
    const dispatch = useDispatch()
    const meters = useSelector(state => state.house.meters)
    const addresses = useSelector(state => state.house.addresses)

    const selectedAddress = useSelector(state => state.house.selectedAddress)
    // const selectedKey = Object.keys( addresses ).map( key => {console.log(key)})

    const pathParams = useParams()

    console.log(pathParams, addresses)

    let searchedKey = Object.keys(meters).find(key => {

        return (addresses[key].streetId === +pathParams.streetId &&
            addresses[key].houseNumberId === +pathParams.houseId)
    })

    console.log(searchedKey)

    return (
        <>
            <h2>Selected</h2>
            <Row gutter={[16, 32]}>
                {!meters[searchedKey] && <h2>По данному адресу приборы учёта не зарегистрированы</h2>}
                {meters[searchedKey] &&
                    <Card
                        title={'Улица ' + addresses[searchedKey]['streetName'] + ', дом №' + addresses[searchedKey]['houseNumber']}
                        className={'bg-neutral-200'}
                    >
                        <Row key={searchedKey}>
                            {/*{ console.log( searchedKey, addresses[searchedKey] ) }*/}
                            <Row gutter={[16, 16]}>
                                {meters[searchedKey].map(meter => {
                                    return (<Col>
                                        {/*{ console.log( searchedKey, meter ) }*/}
                                        <div className={'inner__card'}>
                                            <Card
                                                type="inner"
                                                hoverable
                                                title={meter.type}
                                                extra={
                                                    <Button onClick={() => dispatch(setCurrentMeter(meter))}>
                                                        <NavLink
                                                            to={`/meters/${searchedKey}/${meter.id}`}>Показания</NavLink>
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
                        </Row>
                    </Card>
                }
            </Row>
        </>
    )
}
