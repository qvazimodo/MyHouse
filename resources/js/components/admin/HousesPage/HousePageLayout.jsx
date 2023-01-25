import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, theme } from 'antd';
import {useState} from 'react';
import {Menu} from './Menu'
import styles from "./Menu.module.css";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined/>),
    getItem('Option 2', '2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];
export const HousePageLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
                background: "#242B33",
            }}
        >
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    background: "#242B33",
                }}
            >
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',

                    }}
                />
                <Menu/>
            </Header>
            <Content
                style={{
                    margin: '0 16px',
                    background: "#242B33",
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        // background: "#242B33",
                    }}
                >
                    {/*<Menu />*/}
                    {children}
                </div>
            </Content>

        </Layout>
    );
};
