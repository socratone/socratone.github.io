import type { ReadonlyURLSearchParams } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';

interface RouteChangeListenerProps {
  onChange: (
    pathname: string | null,
    searchParams: ReadonlyURLSearchParams | null
  ) => void;
}

const SearchParamsWrapper: React.FC<RouteChangeListenerProps> = ({
  onChange,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Listen for page changes.
   * https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
   */
  useEffect(() => {
    onChange(pathname, searchParams);
  }, [pathname, searchParams, onChange]);

  return <></>;
};

/**
 * Page change listener.\
 * Wrap useSearchParams in Suspense to prevent the error below.\
 * https://nextjs.org/docs/messages/deopted-into-client-rendering
 */
const RouteChangeListener: React.FC<RouteChangeListenerProps> = ({
  onChange,
}) => {
  return (
    <Suspense>
      <SearchParamsWrapper onChange={onChange} />
    </Suspense>
  );
};

export default RouteChangeListener;
