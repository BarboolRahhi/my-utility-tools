import React from 'react';

import { cn } from '../../utils/cn';

export const RupeeSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={cn("w-4 h-4 opacity-70", props.className)}
      {...props}
    >
      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06z" />
    </svg>
  );
};
