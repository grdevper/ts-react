import React, {createContext, ReactElement} from "react";

import * as store from '@store/index'

interface ChildrenProps<T> {
  children: (value: T) => ReactElement<any>
}

export const RootContext = createContext<IStore>(null);

export const RootConsumer = ({children}: ChildrenProps<IStore>) => <div>{()=> children(store)}</div>;

export default function ({children}: {children?: React.ReactNode}) {
  return <RootContext.Provider value={{...store}} >{children}</RootContext.Provider>
}