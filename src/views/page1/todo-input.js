import React, { useState } from 'react';
import { Input } from 'antd';
const TodoInput = ({ onSetQuery, placeholder }) => {
    const [value, setValue] = useState('');
    return (React.createElement("section", null,
        React.createElement(Input, { onPressEnter: () => onSetQuery(value), value: value, onChange: e => setValue(e.target.value), placeholder: placeholder })));
};
export default TodoInput;
//# sourceMappingURL=todo-input.js.map