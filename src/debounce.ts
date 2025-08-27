import React from "react";

export const debouncer = (delay = 400) => {
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const caller = React.useCallback(
    (cb: (data?: unknown) => void) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        cb();
      }, delay);
    },
    [delay]
  );

  return caller;
};
