import React, { useRef, useLayoutEffect } from 'react';
import './styles.css';

export const UseLayoutEffect = () => {
  const inputGroupRef = useRef();
  const labelRef = useRef();
  const inputRef = useRef();

  useLayoutEffect(() => {  // try replacing with useEffect()
    const { current } = inputRef;

    // Direct DOM manipulation, needed in 1% of cases
    labelRef.current.style.fontSize = '40px';

    // For event listeners useEffect() would suffice
    const handleFocus = () => inputGroupRef.current.classList.add('uleActive');
    const handleBlur = () => !current.value && inputGroupRef.current.classList.remove('uleActive');

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    }
  }, []);
  
  return (
    <div className="uleContainer">
      <div ref={inputGroupRef} className="uleInputGroup">
        <label ref={labelRef} className="uleLabel">Your Name</label>
        <input ref={inputRef} className="uleInput" autoComplete="off" type="text" />
        <div className="uleBorder" />
      </div>
    </div>
  );
}

// https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
// https://twitter.com/dan_abramov/status/1096916868026245121?lang=en
// https://codesandbox.io/s/7y96862n2q
