import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import {
    DesktopOutlined,
    FileOutlined,
    LaptopOutlined,
    NotificationOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { adminHeaderMenuItems } from "./helpers/adminHeaderMenuItems"

const { Header, Content, Footer, Sider } = Layout;

const items1 = [ '1', '2', '3' ].map( ( key ) => ({
    key,
    label: `nav ${ key }`,
}) );


const items2 = [ UserOutlined, LaptopOutlined, NotificationOutlined ].map( ( icon, index ) => {
    const key = String( index + 1 );
    return {
        key: `sub${ key }`,
        icon: React.createElement( icon ),
        label: `subnav ${ key }`,
        children: new Array( 4 ).fill( null ).map( ( _, j ) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${ subKey }`,
            };
        } ),
    };
} );

function getItem( label, key, icon, children ) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem( 'Option 1', '1', <PieChartOutlined/> ),
    getItem( 'Option 2', '2', <DesktopOutlined/> ),
    getItem( 'User', 'sub1', <UserOutlined/>, [
        getItem( 'Tom', '3' ),
        getItem( 'Bill', '4' ),
        getItem( 'Alex', '5' ),
    ] ),
    getItem( 'Team', 'sub2', <TeamOutlined/>, [ getItem( 'Team 1', '6' ), getItem( 'Team 2', '8' ) ] ),
    getItem( 'Files', '9', <FileOutlined/> ),
];
export const MainPage = () => {
    const [ collapsed, setCollapsed ] = useState( false );
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    const clickOnHeaderMenu = ( { key } ) => {
        navigate( key )
    }

    const address = useSelector( state => state.house.selectedAddress )

    return (
        <Layout
            style={ {
                minHeight: '100vh',
            } }
        >
            <Sider collapsible collapsed={ collapsed } onCollapse={ ( value ) => setCollapsed( value ) }>
                <div
                    style={ {
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    } }
                />
                <Menu theme="dark" defaultSelectedKeys={ [ '1' ] }
                      mode="inline" items={ items2 }/>
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={ {
                        padding: 0,
                        background: colorBgContainer,
                    } }
                >
                    <Menu theme="dark" mode="horizontal"
                          defaultSelectedKeys={ [ '2' ] }
                          items={ adminHeaderMenuItems }
                          onClick={ clickOnHeaderMenu }
                    />
                </Header>
                <Content
                    style={ {
                        margin: '0 16px',
                    } }
                >
                    <Breadcrumb
                        style={ {
                            margin: '16px 0',
                        } }
                    >
                        <Breadcrumb.Item>{ address.streetName }</Breadcrumb.Item>
                        <Breadcrumb.Item>{ address.houseNumber }</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={ {
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        } }
                    >

                        <Outlet/>

                    </div>
                </Content>
                <Footer
                    style={ {
                        textAlign: 'center',
                    } }
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
