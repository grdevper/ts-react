import {useState, useEffect} from 'react'
interface SearchResult {
  tabs: string,
  result: any[],
}

export const useRequest = (fn, deps: any[], defaultValue?: SearchResult) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = () => {
    setLoading(true);
    let cancel = false;
    fn()
      .then(res => {
        if(!cancel) {
          setData(res);
        } else {
          console.log('sorry it is wrong!');
        }
      }).catch((err) => {
        if (!cancel) {
          setError(err);
        }
      }).finally(() => {
        if (!loading){
          setLoading(false);
        }
      });
    return () => {
      cancel = true;
    };
  };
  useEffect(() => {
    const cancelRequest = request();
    return () => {  //清除负作用
      cancelRequest();
    }
  }, deps);
  return {data, setData, loading, error, request}
};

export function useWithLoading(fn) {
  const [loading, setLoading] = useState(false);
  const func = (...args) => {
    setLoading(true);
    return fn(...args).finally(() => {
      setLoading(false);
    })
  };
  return {func, loading}
}