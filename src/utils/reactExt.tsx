import {message, notification} from 'antd'

// store 提示 es7语法相当于storeExt的静态属性
export class StoreExt {
  readonly $message = message;
  readonly $notification = notification;
}