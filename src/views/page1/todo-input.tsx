import React, {useState} from 'react'
import {Input} from 'antd';

const TodoInput = ({onSetQuery, placeholder}:{onSetQuery: any, placeholder: string}) => {
  const [value, setValue] = useState('');
  return (
    <section>
      <Input
        onPressEnter={() => onSetQuery(value)}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </section>
  )
};

export default TodoInput;