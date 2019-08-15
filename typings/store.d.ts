import {RouterStore as _RouterStore} from 'mobx-react-router'

// 全局变量
declare global {

  // 继承_RouterStore的属性和方法
  interface RouterStore extends _RouterStore {}

  // 定义IStore 所有的store
  interface IStore {

  }

}