import React, { createContext } from "react";
import * as store from '@store/index';
export const RootContext = createContext(null);
export const RootConsumer = ({ children }) => React.createElement("div", null, () => children(store));
export default function ({ children }) {
    return React.createElement(RootContext.Provider, { value: Object.assign({}, store) }, children);
}
//# sourceMappingURL=provider.js.map