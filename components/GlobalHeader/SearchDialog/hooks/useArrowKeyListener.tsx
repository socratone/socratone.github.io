import { useCallback, useEffect } from 'react';

const useArrowKeyListener = (
  /** useCallback으로 감싼 callback. */
  callback: (event: KeyboardEvent) => void,
  enabled: boolean
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        callback(event);
      }
    },
    [callback]
  );

  useEffect(() => {
    if (enabled) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, handleKeyDown]);
};

export default useArrowKeyListener;
