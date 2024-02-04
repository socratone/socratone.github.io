import { useCallback, useEffect } from 'react';

const useOpenShortcutListener = (callback: () => void) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'k' && event.metaKey) {
        /** Prevent the default behavior of the browser. */
        event.preventDefault();
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useOpenShortcutListener;
