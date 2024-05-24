import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(checkDarkMode());

  function checkDarkMode() {
    return document.documentElement.dataset.theme === "dark";
  }

  useEffect(() => {
    setIsDarkMode(checkDarkMode);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName?.startsWith("data-")
        ) {
          setIsDarkMode(checkDarkMode());
        }
      });
    });

    mutationObserver.observe(document.documentElement, { attributes: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return isDarkMode;
};
