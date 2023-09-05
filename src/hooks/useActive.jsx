import React, { useState } from "react";

const useActive = (initState) => {
  const [active, setActive] = useState(initState);

  const handleActive = (i) => {
    setActive(i);
  };

  const activeClass = (i) => {
    return active === i ? "active_tab" : "";
  };

  return { active, handleActive, activeClass };
};

export default useActive;
