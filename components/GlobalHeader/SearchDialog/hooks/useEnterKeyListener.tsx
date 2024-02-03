import { useCallback, useEffect } from 'react';

const useEnterKeyListener = (
  /** useCallback으로 감싼 callback. */
  callback: () => void,
  enabled: boolean
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        callback();
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

export default useEnterKeyListener;
