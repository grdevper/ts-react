import React, {useState, useEffect} from 'react'
import {Spin, Tabs} from 'antd'
import TodoInput from "./todo-input";
import TodoList from "./todo-list";
import {useRequest, useWithLoading} from "./search";
import {fetchTodos, TabKey, toggleTodo} from "@api/todo";
import './index.scss';

const tabMap = {
  [TabKey.TAB_ALL]: '全部',
  [TabKey.TAB_FINISHED]: '已完成',
  [TabKey.TAB_UNFINISHED]: '待完成',
};

const {TabPane} = Tabs;

function Page1() {

  const initTabkey:string = TabKey.TAB_ALL;

  const [activeTab, setActiveTab] = useState(initTabkey);
  const [query, setQuery] = useState("");


  const {
    data,
    loading: listLoading,
  } = useRequest(() => {
    return fetchTodos({query, tab: activeTab})
  }, [query, activeTab]);

  const [placeholder, setPlaceholder] = useState('');
  useEffect(() => {
    setPlaceholder(`在${tabMap[activeTab]}中搜索`);
  }, [activeTab]);

  const {func: onToggleFinished, loading: toggleLoading} = useWithLoading(
    async id => {
      await toggleTodo(id);
    }
  );

  const loading = !!listLoading || !!toggleLoading;
  return (
    <div>
       <Tabs activeKey={activeTab} onChange={setActiveTab}>
         <TabPane tab={tabMap[TabKey.TAB_ALL]} key={TabKey.TAB_ALL} />
         <TabPane tab={tabMap[TabKey.TAB_FINISHED]} key={TabKey.TAB_FINISHED} />
         <TabPane tab={tabMap[TabKey.TAB_UNFINISHED]} key={TabKey.TAB_UNFINISHED} />
       </Tabs>
       <div>
         <h1>todo List</h1>
         <TodoInput placeholder={placeholder} onSetQuery={setQuery}/>
         <Spin spinning={loading} tip={"骚等..."}>
            <TodoList todos={data ? data.result : []} onToggleFinished={onToggleFinished}/>
         </Spin>
       </div>
    </div>
  )
}

export default Page1;