import React, { useState, useEffect, useRef } from "react";

const useInitialRender = () => {
  const isInitialRender = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  return isInitialRender.current;
};

export const CustomUseInitialRender = () => {
  const [value, setValue] = useState("initial");
  const isInitialRender = useInitialRender();

  useEffect(() => {
    if (!isInitialRender) {
      console.log("update");  // on updates only
    }
  });

  return (
    <>
      <div>
        <input type="radio" name="value" onChange={() => setValue("this")} />
        this
        <input type="radio" name="value" onChange={() => setValue("that")} />
        that
      </div>
      <div>{value}</div>
      <div>{isInitialRender ? null : "updated"}</div>
    </>
  );
};

// https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state