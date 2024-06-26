import React from 'react';

import { cn } from '../../utils/cn';

export const TimePeriodSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className={cn("w-4 h-4 opacity-70", props.className)}
      {...props}
    >
      <path fill="currentColor" d="M9 7h2v5h5v2H9V7z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
