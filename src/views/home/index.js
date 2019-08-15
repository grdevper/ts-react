import React from 'react';
import { Layout } from 'antd';
import styles from './index.scss';
const { Header, Sider, Content } = Layout;
function Home() {
    return (React.createElement(Layout, null,
        React.createElement(Header, null,
            React.createElement("div", { className: styles.header }, "come on")),
        React.createElement(Layout, null,
            React.createElement(Sider, null),
            React.createElement(Layout, null,
                React.createElement(Content, null, "hhhhhahah")))));
}
export default Home;
//# sourceMappingURL=index.js.map