import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Outlet, useNavigate} from "react-router-dom"
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {adminHeaderMenuItems} from "./helpers/adminHeaderMenuItems"
import {fetchHouses, fetchDescription, setSelectedAddress} from "../../features/house/houseSlice";


const {Header, Content, Footer, Sider} = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined]
    .map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });

export const MainPage = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState({})
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const clickOnHeaderMenu = ({key}) => {
        navigate(key)
    }
    let index = 0
    const address = useSelector(state => state.house.selectedAddress)
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
        console.log(selectedStreetWithHouses)
        let selectedHouse = selectedStreetWithHouses.children.find(house => house.key === keyPath[0])
        console.log(selectedHouse)
        dispatch(setSelectedAddress({
            streetName: selectedStreetWithHouses.label,
            houseNumber: selectedHouse.label
        }))
        return {
            streetId: selectedStreetWithHouses.id,
            houseNumberId: selectedHouse.id
        }
    }

    useEffect(() => {
        dispatch(fetchDescription(selectedMenuItem))
    }, [selectedMenuItem])


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
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu
                    onClick={({item, key, keyPath, domEvent}) => {
                        console.log(keyPath)
                        setSelectedMenuItem(getAddress(keyPath))
                        console.log(selectedMenuItem)
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
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};