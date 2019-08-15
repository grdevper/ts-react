import React from 'react'
import {Layout} from 'antd';

import styles from './index.scss';

const {Header, Sider, Content} = Layout;

function Home() {
  return (
    <Layout>
       <Header>
          <div className={styles.header}>
            come on
          </div>
       </Header>
       <Layout>
         <Sider/>
         <Layout>
           <Content>
              hhhhhahah
           </Content>
         </Layout>
       </Layout>
    </Layout>
  )
}

export default Home;