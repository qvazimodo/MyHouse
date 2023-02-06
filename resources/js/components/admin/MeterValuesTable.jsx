import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { Badge, Card, Col, Divider, Row, Tag } from "antd";
import { fetchMeterValues } from "../../features/house/houseSlice";

export const MeterValuesTable = () => {
    let { houseAddressId, meterId } = useParams()
    const houseAddress = useSelector( state => state.house.addresses[houseAddressId] )
    const currentMeter = useSelector( state => state.house.currentMeter )
    const currentMeterValues = useSelector( state => state.house.currentMeterValues )
    console.log( currentMeter, currentMeterValues )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( fetchMeterValues( currentMeter.id ) )
    }, [ currentMeter ] );

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
                <Col span={ 4 } offset={ 2 } className={ 'flex justify-between items-center' }>
                    <Tag className={ 'p-3' } color="#55acee">Номер счётчика:</Tag>
                    <span> { currentMeter.number }</span>
                </Col>
            </Row>
            <Row>

{/*                <Card
                    style={ {
                        width: '100%',
                    } }
                    tabList={ tablist }
                    activeTabKey={ activeTabKey }
                    onTabChange={ onTabChange }
                >
                    { contentList[activeTabKey] }
                </Card>*/}
                <Card
                    style={{
                        width: '100%',
                    }}
                >
                    {Object.keys( currentMeterValues ).map( key => {
                        return (
                            <div className={'flex justify-between w-full'}>
                                <div className={'align-self-center pr-5 text-2xl'}>{key}</div>
                                {currentMeterValues[key].map(month=>{
                                console.log(month.value)
                                return(
                                    <Col span={2} >
                                        <Divider/>
                                        <Badge className={'text-md'}>{ month.name }</Badge>
                                        <div className={'text-lg'}>{ month.value }</div>

                                    </Col>
                                )
                            })}</div>
                        )
                    })}
                </Card>
            </Row>


        </div>
    )
}
