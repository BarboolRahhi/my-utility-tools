import { useState, useEffect } from "react";

const breakpoints = {
  xs: "(max-width: 640px)",
  sm: "(min-width: 641px) and (max-width: 768px)",
  md: "(min-width: 769px) and (max-width: 1024px)",
  lg: "(min-width: 1025px) and (max-width: 1280px)",
  xl: "(min-width: 1281px)",
} as const;

type BreakpointKey = keyof typeof breakpoints;

const useScreenWidth = () => {
  const [matches, setMatches] = useState<Record<BreakpointKey, boolean>>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  useEffect(() => {
    const mediaQueryLists: Record<BreakpointKey, MediaQueryList> = {
      xs: window.matchMedia(breakpoints.xs),
      sm: window.matchMedia(breakpoints.sm),
      md: window.matchMedia(breakpoints.md),
      lg: window.matchMedia(breakpoints.lg),
      xl: window.matchMedia(breakpoints.xl),
    };

    const handleChange = () => {
      setMatches({
        xs: mediaQueryLists.xs.matches,
        sm: mediaQueryLists.sm.matches,
        md: mediaQueryLists.md.matches,
        lg: mediaQueryLists.lg.matches,
        xl: mediaQueryLists.xl.matches,
      });
    };

    // Initial check
    handleChange();

    // Add listeners
    Object.keys(mediaQueryLists).forEach((key) => {
      const mqList = mediaQueryLists[key as BreakpointKey];
      mqList.addEventListener("change", handleChange);
    });

    return () => {
      // Remove listeners on cleanup
      Object.keys(mediaQueryLists).forEach((key) => {
        const mqList = mediaQueryLists[key as BreakpointKey];
        mqList.removeEventListener("change", handleChange);
      });
    };
  }, []);

  return matches;
};

export default useScreenWidth;
