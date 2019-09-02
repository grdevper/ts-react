export enum TabKey {
  TAB_ALL = 'all',
  TAB_FINISHED = 'finished',
  TAB_UNFINISHED = 'unfinished'
}
interface Todo {
  id: number,
  text: string,
  finished: boolean,
}

const todos: Todo[]  = [
  {
    id: 1,
    text: 'todo1',
    finished: true
  },{
    id: 2,
    text: 'todo2',
    finished: true
  },{
    id: 3,
    text: 'todo3',
    finished: true
  },{
    id: 4,
    text: 'todo4',
    finished: true
  },{
    id: 5,
    text: 'todo5',
    finished: false
  },{
    id: 6,
    text: 'todo6',
    finished: true
  },
];

// 设置延时
const delay = time => new Promise(resolve => setTimeout(resolve, time));

const withDelay = fn => async (...args) => {
  await delay(1000);
  return fn(...args);
};
//等同于
/*
function withDelay(fn) {
  return function (...args) {
    fn(...args);
  }
}*/

export const fetchTodos = withDelay(params => {
  const {query, tab} = params;
  let result = todos;
  if (tab) {
    switch (tab) {
      case TabKey.TAB_FINISHED:
        result = result.filter(todo => todo.finished === true);
        break;
      case TabKey.TAB_UNFINISHED:
        result = result.filter(todo => todo.finished === false);
        break;
      default:
        break;
    }
  }

  if(query) {
    result = result.filter(todo => todo.text.includes(query));
  }

  return Promise.resolve({
    tab,
    result,
  });
});

export const toggleTodo = withDelay(id => {
  const todoIndex = todos.findIndex(({id: todoId}) => id === todoId);
  if (todoIndex !== -1) {
    const todo = todos[todoIndex];
    const newTodo = {
      ...todo,
      finished: !todo.finished
    }
    todos.splice(todoIndex, 1, newTodo)
  }
  return Promise.resolve(true);
});