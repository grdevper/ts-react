import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import styles from './index.scss';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;
function Home() {
    const [count, setCount] = useState(0);
    return (React.createElement(Layout, null,
        React.createElement(Header, null),
        React.createElement(Layout, null,
            React.createElement(Sider, null,
                React.createElement(Menu, { mode: "inline" },
                    React.createElement(SubMenu, { key: "sub1", title: "sub11" },
                        React.createElement(MenuItem, null, "A"),
                        React.createElement(MenuItem, null, "B"),
                        React.createElement(MenuItem, null, "C")))),
            React.createElement(Layout, null,
                React.createElement(Breadcrumb, { className: styles.breadcrumb },
                    React.createElement(Breadcrumb.Item, null, "Home"),
                    React.createElement(Breadcrumb.Item, null, "List"),
                    React.createElement(Breadcrumb.Item, null, "App")),
                React.createElement(Content, { className: styles.main },
                    React.createElement(Button, null, "increase"),
                    React.createElement(Button, null, "decrease"),
                    React.createElement("span", null, count))))));
}
export default Home;
//# sourceMappingURL=index.js.map