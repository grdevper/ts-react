import React, { createContext } from "react";
export const RootContext = createContext(null);
export const RootConsumer = ({ children }) => React.createElement("div", null, () => children(store));
//# sourceMappingURL=provider.js.map