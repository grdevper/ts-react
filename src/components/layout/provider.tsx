import React, {createContext, ReactElement} from "react";

interface ChildrenProps<T> {
  children: (value: T) => ReactElement<any>
}

export const RootContext = createContext<IStore>(null);

export const RootConsumer = ({children}: ChildrenProps<IStore>) => <div>{()=> children(store)}</div>;