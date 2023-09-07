import React, { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `SV Ayurved - ${title}`;
    } else {
      document.title = "SVayurved | A Trusted Marque in Ayurved";
    }
  }, [title]);

  return null;
};

export default useDocTitle;
