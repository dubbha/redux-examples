import React, { useState, useCallback, useEffect, useMemo, PureComponent } from 'react';
import { someExpensiveComputation } from './utils';

class OptimizedChild extends PureComponent {
  render() {
    const { name, res, callback } = this.props;
    console.log(`${name} rendered`);
    return (
      <button onClick={callback} className="heavy halfInput">
        {res}
      </button>
    )
  }
}

export const UseMemoWithUseCallback = () => {
  const [n, setN] = useState(1);
  const [res, setRes] = useState(1);

  const memoizedValue = useMemo(
    () => someExpensiveComputation(n),
    [n]
  );

  const memoizedCallback = useCallback(
    () => setRes(memoizedValue),
    [memoizedValue]
  );

  useEffect(() => { console.log('parent rendered') });
  useEffect(() => { console.log('callback changed') }, [memoizedCallback]);
  useEffect(() => { console.log('result updated') }, [res]);

  const [text, setText] = useState('change me to trigger parent re-render');

  return (
    <>
      <label>n:</label>
      <input value={n} onChange={e => { setN(Number(e.target.value)); setRes('?'); }} type="number" min={0} />

      <div>
        <label>fib(n):</label>
        <OptimizedChild name="Memo" res={res} callback={memoizedCallback} />
        <OptimizedChild name="Nemo" res={res} callback={() => setRes(memoizedValue)} />

        <input value={text} onChange={e => setText(e.target.value)} className="nolabel" />
      </div>
    </>
  );
};