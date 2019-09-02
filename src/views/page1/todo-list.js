import React from 'react';
import { List, Icon } from 'antd';
import classNames from 'classnames';
const TodoList = ({ todos, onToggleFinished }) => {
    const onDelete = e => {
        e.stopPropagation();
    };
    return (React.createElement("div", { className: "list-wrap" }, todos.length === 0 ? (React.createElement("p", null, "\u6682\u65E0\u5F85\u529E\u4E8B\u9879")) : (React.createElement(List, { itemLayout: "horizontal", dataSource: todos, renderItem: ({ id, text, finished }) => {
            const className = classNames({
                'list-item': true,
                'list-item__finished': finished
            });
            return (React.createElement(List.Item, { className: className },
                React.createElement("div", { onClick: () => onToggleFinished(id), className: 'list-item-wrap' },
                    React.createElement("span", null, text),
                    React.createElement(Icon, { type: "delete", onClick: onDelete }))));
        } }))));
};
export default TodoList;
//# sourceMappingURL=todo-list.js.map