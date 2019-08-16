import React, {useState} from 'react'
import {Layout, Menu, Breadcrumb, Button} from 'antd';

import styles from './index.scss';

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;
const MenuItem = Menu.Item;

function Home() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
       <Header/>
       <Layout>
         <Sider>
           <Menu
             mode="inline"
           >
             <SubMenu
               key="sub1"
               title="sub11"
             >
                 <MenuItem>A</MenuItem>
                 <MenuItem>B</MenuItem>
                 <MenuItem>C</MenuItem>
             </SubMenu>
           </Menu>
         </Sider>
         <Layout>
           <Breadcrumb className={styles.breadcrumb}>
             <Breadcrumb.Item>Home</Breadcrumb.Item>
             <Breadcrumb.Item>List</Breadcrumb.Item>
             <Breadcrumb.Item>App</Breadcrumb.Item>
           </Breadcrumb>
           <Content className={styles.main}>
             <Button>increase</Button>
             <Button>decrease</Button>
             <span>{count}</span>
           </Content>
         </Layout>
       </Layout>
    </Layout>
  )
}

export default Home;