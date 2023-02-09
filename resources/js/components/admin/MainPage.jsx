import React, {useEffect, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { Outlet, useNavigate, redirect, useLocation } from "react-router-dom"
import {Layout, Menu, theme} from 'antd';
import {adminHeaderMenuItems} from "./helpers/adminHeaderMenuItems"
import {
    clearDescription,
    clearSelectedAddress,
    fetchAddresses,
    fetchHouses,
    setSelectedAddress
} from "../../features/house/houseSlice";
import {isNull} from "lodash";
import {useBasePath} from "../../hooks/useBasePath";
import {clearClientsArray} from "../../features/client/clientSlice";


const {Header, Content, Footer, Sider} = Layout;

export const MainPage = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState({})
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const navigate = useNavigate()
    const location = useLocation()
    const basePath = useBasePath()

    const dispatch = useDispatch()
    const clickOnHeaderMenu = ({key}) => {
        setOpenKeys([])
        navigate(key)
    }

    useEffect(() => {
            dispatch(fetchHouses())
            return () =>
                dispatch(fetchHouses())
        }, []
    )

    useEffect(() => {
            dispatch(fetchAddresses())
            return () => dispatch(fetchAddresses())
        }, []
    )

    let index = 0
    const addresses = useSelector(state => state.house.addressesArray)
    const sideMenuItems = addresses.map(address => {
        return {
            id: address.id,
            // icon: React.createElement( icon ),
            key: (index++).toString(),
            label: address.name,
            children: [...address['house_numbers'].map(houseNumber => {
                return {
                    id: houseNumber.id,
                    key: (index++).toString(),
                    label: houseNumber.value
                }
            })]
        };
    })

    const rootSubmenuKeys = sideMenuItems.map(item => item.key)
    const [openKeys, setOpenKeys] = useState([]);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        console.log(keys)
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };


    const getAddress = (keyPath) => {
        // console.log(keyPath, sideMenuItems)
        let selectedStreetWithHouses = sideMenuItems.find(street => street.key === keyPath[1])
        // console.log( selectedStreetWithHouses )
        let selectedHouse = selectedStreetWithHouses.children.find(house => house.key === keyPath[0])
        // console.log( selectedHouse )
        const selectedAddress = {
            streetName: selectedStreetWithHouses.label,
            houseNumber: selectedHouse.label,
            streetId: selectedStreetWithHouses.id,
            houseNumberId: selectedHouse.id
        }
        // console.log( selectedAddress )
        dispatch(setSelectedAddress(selectedAddress))
        return selectedAddress
    }


    const defaultSelectedMenuItem = '/addresses'

    useEffect(() => {
        navigate(defaultSelectedMenuItem)
        return () => {
            navigate(defaultSelectedMenuItem)
        };
    }, []);

    return (
        <Layout style={{
            minHeight: '100vh',
        }}
        >
            <Sider collapsible
                   collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)
                   }>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        // background: 'rgba(255, 255, 255, 0.2)',
                    }}
                    className={'text-blue-500 text-base text-white text-center'}
                >Адреса
                </div>
                <Menu
                    onClick={({item, key, keyPath, domEvent}) => {
                        console.log(keyPath)
                        setSelectedMenuItem(getAddress(keyPath))
                        const address = getAddress(keyPath)
                        console.log(basePath)
                        const path = basePath + `/${address.streetId}/${address.houseNumberId}`
                        console.log(path)
                        navigate(path)
                    }}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    theme="dark" defaultSelectedKeys={['1']}
                    mode="inline" items={sideMenuItems}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Menu theme="dark" mode="horizontal"
                          defaultSelectedKeys={[defaultSelectedMenuItem]}
                          items={adminHeaderMenuItems}
                          onClick={clickOnHeaderMenu}
                    />
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {/*                  <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>{address.streetName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{address.houseNumber}</Breadcrumb.Item>
                    </Breadcrumb>*/}
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet/>

                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                    className={'flex justify-between'}
                >
                    <div>Created by MyHouse ©2023</div>
                    <div>Powered by Ant Design</div>
                </Footer>
            </Layout>
        </Layout>
    );
};
