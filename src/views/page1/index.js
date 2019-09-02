import * as tslib_1 from "tslib";
import React, { useState, useEffect } from 'react';
import { Spin, Tabs } from 'antd';
import TodoInput from "./todo-input";
import TodoList from "./todo-list";
import { useRequest, useWithLoading } from "./search";
import { fetchTodos, TabKey, toggleTodo } from "@api/todo";
import './index.scss';
const tabMap = {
    [TabKey.TAB_ALL]: '全部',
    [TabKey.TAB_FINISHED]: '已完成',
    [TabKey.TAB_UNFINISHED]: '待完成',
};
const { TabPane } = Tabs;
function Page1() {
    const initTabkey = TabKey.TAB_ALL;
    const [activeTab, setActiveTab] = useState(initTabkey);
    const [query, setQuery] = useState("");
    const { data, loading: listLoading, } = useRequest(() => {
        return fetchTodos({ query, tab: activeTab });
    }, [query, activeTab]);
    const [placeholder, setPlaceholder] = useState('');
    useEffect(() => {
        setPlaceholder(`在${tabMap[activeTab]}中搜索`);
    }, [activeTab]);
    const { func: onToggleFinished, loading: toggleLoading } = useWithLoading((id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield toggleTodo(id);
    }));
    const loading = !!listLoading || !!toggleLoading;
    return (React.createElement("div", null,
        React.createElement(Tabs, { activeKey: activeTab, onChange: setActiveTab },
            React.createElement(TabPane, { tab: tabMap[TabKey.TAB_ALL], key: TabKey.TAB_ALL }),
            React.createElement(TabPane, { tab: tabMap[TabKey.TAB_FINISHED], key: TabKey.TAB_FINISHED }),
            React.createElement(TabPane, { tab: tabMap[TabKey.TAB_UNFINISHED], key: TabKey.TAB_UNFINISHED })),
        React.createElement("div", null,
            React.createElement("h1", null, "todo List"),
            React.createElement(TodoInput, { placeholder: placeholder, onSetQuery: setQuery }),
            React.createElement(Spin, { spinning: loading, tip: "骚等..." },
                React.createElement(TodoList, { todos: data ? data.result : [], onToggleFinished: onToggleFinished })))));
}
export default Page1;
//# sourceMappingURL=index.js.map