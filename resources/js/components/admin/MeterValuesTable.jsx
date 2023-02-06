import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { Col, Row, Tag } from "antd";
import { fetchMeterValues } from "../../features/house/houseSlice";

export const MeterValuesTable = () => {
    let { houseAddressId, meterId } = useParams()
    const houseAddress = useSelector( state => state.house.addresses[houseAddressId] )
    const currentMeter = useSelector( state => state.house.currentMeter )
    console.log( currentMeter )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( fetchMeterValues( currentMeter.id ) )
    }, [ currentMeter ] );

    return (
        <div className={ 'w-full ' }>

            <Row className={ 'bg-neutral-400 text-white p-10 w-full text-xl rounded-t-xl' }>
                { 'Улица ' + houseAddress['streetName'] + ', дом №' + houseAddress['houseNumber'] }
            </Row>
            <Row className={ 'flex w-full py-10' }>
                <Col span={ 4 } offset={ 1 } className={ 'flex justify-between items-center' }>
                    <Tag className={ 'p-3' } color="#3b5999">Вид энергоресурса:</Tag>
                    <span> { currentMeter.type }</span>
                </Col>
                <Col span={4} offset={2} className={ 'flex justify-between items-center' }>
                    <Tag className={ 'p-3' } color="#55acee">Номер счётчика:</Tag>
                    <span> { currentMeter.number }</span>
                </Col>
            </Row>


        </div>
    )
}
