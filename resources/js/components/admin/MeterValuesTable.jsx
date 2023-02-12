import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { Card, Col, Divider, Row, Tag } from "antd";
import { fetchMeterValues } from "../../features/meter/meterSlice";
import { isNull } from "lodash";
import { ADMIN_PARENT_METER_VALUE_API_URL } from "../../helpers/API"

export const MeterValuesTable = () => {
    let { meterId } = useParams()
    // const houseAddress = useSelector( state => state.house.addresses[houseAddressId] )
    const currentMeter = useSelector( state => state.house.currentMeter )
    const currentMeterValues = useSelector( state => state.meter.currentMeterValues )
    console.log( currentMeter, currentMeterValues )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( fetchMeterValues( meterId ) )
    }, [] );

    const tablist = Object.keys( currentMeterValues ).map( key => {
        return {
            key: key,
            tab: key
        }
    } )
    console.log( tablist )
    const [ activeTabKey, setActiveTabKey ] = useState( '2020' );
    const onTabChange = ( key ) => {
        setActiveTabKey( key );
    };

    const contentList = {}
    Object.keys( currentMeterValues ).forEach( key => {

            contentList[key] = (
                <div>
                    { currentMeterValues[key].map( month => {
                        return (
                            <div>{ month[name] }</div>
                        )
                    } ) }
                </div>)

        }
    )
    console.log( contentList )

    const getClassNameByMonth = ( monthId ) => {
        if ( [12, 1,2].includes(monthId)  ){return'bg-blue-500' }
        if ( [3, 4,5].includes(monthId)  ){return'bg-green-500' }
        if ( [6, 7,8].includes(monthId)  ){return'bg-red-500' }
        if ( [9, 10,11].includes(monthId)  ){return'bg-yellow-500' }
    }

    const getConsumption = ( month ) => month['value'] - month['parent_value']


    const getPreviousReadings = async ( month ) => {
        if ( isNull( month['parent_id'] ) ) {
            console.log( null )
            return 0
        }
        let response = await fetch( ADMIN_PARENT_METER_VALUE_API_URL + month['parent_id'] )
        let answer = await response.json();
        console.log( answer.data.value )
        return answer.data.value
    }
    return (
        <div className={ 'w-full ' }>
            <Row className={ 'flex py-10' }>
                <Col span={ 4 } offset={ 1 } className={ 'flex justify-between items-center' }>
                    <Tag className={ 'p-3' } color="#3b5999">Вид энергоресурса:</Tag>
                    <span> { currentMeter.type }</span>
                </Col>
                <Col span={ 4 } offset={ 3 } className={ 'flex justify-between items-center' }>
                    <Tag className={ 'p-3' } color="#55acee">Номер счётчика:</Tag>
                    <span> { currentMeter.number }</span>
                </Col>
            </Row>
            <Row>
                <Card
                    style={{
                        width: '100%',
                    }}
                >
                    {Object.keys( currentMeterValues ).map( key => {
                        return (
                            <Row span={ 24 }>
                                <Col span={ 1 } className={ 'flex justify-items-center items-center pr-5' +
                                    ' text-2xl' }>
                                    <div className={ '-rotate-90' }>{ key }</div>
                                </Col>

                                <Col span={ 2 }>
                                    <div className={ 'text-md py-2 text-center mb-2' }>
                                        Месяц
                                    </div>
                                    <div className={
                                        'text-lg text-center' }>Показания
                                    </div>
                                    <div className={
                                        'text-lg text-center' }>Расход
                                    </div>
                                    <Divider/>
                                </Col>
                                <Col span={ 21 }>
                                    <Row span={ 24 }>
                                        { currentMeterValues[key].map( month => {
                                            // console.log( month )
                                            return (
                                                <Col span={ 2 }>
                                                    <div
                                                        className={ getClassNameByMonth( month['month_id'] ) + ' ' +
                                                            'text-md py-2 text-center mb-2' }>{ month.name }</div>
                                                    <div className={
                                                        'text-lg text-center' }>{ month.value }
                                                    </div>
                                                    <div className={
                                                        'text-lg text-center' }>{ getConsumption( month ) }
                                                    </div>
                                                    <Divider/>
                                                </Col>
                                            )
                                        } ) }
                                    </Row>
                                </Col>
                            </Row>
                        )
                    })}
                </Card>
            </Row>


        </div>
    )
}
