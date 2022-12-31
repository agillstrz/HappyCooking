import { useEffect, useState } from "react";

export const useDebounce = (ms, val) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(val);
    }, ms);
    return () => {
      clearTimeout(handler);
    };
  }, [val, ms]);

  return [value];
};
