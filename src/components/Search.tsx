import React, { Key, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";

type SearchProps<T> = {
  id?: string;
  label?: string;
  placeholder?: string;
  defaultValues?: string;
  value?: string;
  valueField: keyof T;
  onChange?: (value: string) => void;
  data: T[];
  filterFn: (item: T, query: string) => boolean;
  itemFn: (item: T) => React.ReactNode;
  itemKey: (item: T) => Key | null | undefined;
  onItemClick?: (item: T) => void;
  resetOnSelect?: boolean;
  className?: string;
};

function Search<T>({
  id,
  placeholder,
  value,
  onChange,
  filterFn,
  itemFn,
  data,
  itemKey,
  valueField,
  onItemClick,
  resetOnSelect,
  className,
}: SearchProps<T>) {
  const [query, setQuery] = useState(value ?? "");
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const filterData = useMemo(
    () => data.filter((item) => filterFn(item, query)),
    [query]
  );

  function handleOnFocus(
    event: React.FocusEvent<HTMLInputElement, Element>
  ): void {
    setDisplaySuggestions(true);
  }

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter" && filterData[selectedItemIndex]) {
      event.preventDefault();

      const data = filterData[selectedItemIndex];
      if (data && typeof data === "object") {
        const value = data[valueField];
        if (typeof value === "string") {
          setQuery(value);
          onChange?.(value);
        }
      } else if (typeof data === "string") {
        setQuery(data);
        onChange?.(data);
      }

      onItemClick?.(data);

      if (resetOnSelect) {
        setQuery("");
        setDisplaySuggestions(false);
        inputRef.current?.blur();
      }
      setSelectedItemIndex(-1);
    }

    if (
      event.key === "ArrowDown" &&
      selectedItemIndex < filterData.length - 1
    ) {
      setSelectedItemIndex((perv) => perv + 1);
    } else if (event.key === "ArrowDown") {
      setSelectedItemIndex(0);
    }

    if (event.key === "ArrowUp" && selectedItemIndex > 0) {
      setSelectedItemIndex((perv) => perv - 1);
    } else if (event.key === "ArrowUp") {
      setSelectedItemIndex(filterData.length - 1);
    }
  }

  useEffect(() => {
    // Event listener to handle clicks outside the input and suggestions list
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        suggestionsRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setDisplaySuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("flex flex-col", className)}>
      <label className="input input-bordered input-sm flex items-center gap-2 relative">
        <input
          id={id}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          //   onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          onKeyDown={handleOnKeyDown}
          ref={inputRef}
          type="text"
          className="grow"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      {displaySuggestions && (
        <ul
          ref={suggestionsRef}
          id="links"
          className="absolute w-56 top-16 bg-white p-2 shadow-lg rounded-lg flex-1"
        >
          {filterData.map((option, index) => (
            <li
              onClick={() => {
                onItemClick?.(option);
                if (option && typeof option === "object") {
                  const value = option[valueField];
                  if (typeof value === "string") {
                    setQuery(value);
                    onChange?.(value);
                  }
                } else if (typeof option === "string") {
                  setQuery(option);
                  onChange?.(option);
                }
                if (resetOnSelect) {
                  setQuery("");
                  setDisplaySuggestions(false);
                  inputRef.current?.blur();
                }
              }}
              key={itemKey(option)}
              className={cn(
                "hover:bg-base-200 p-2 rounded-lg text-sm cursor-pointer",
                index === selectedItemIndex ? "bg-primary text-white" : ""
              )}
            >
              {itemFn(option)}
            </li>
          ))}
          {filterData.length === 0 && (
            <li
              key="no-data-found"
              className="hover:bg-primary px-2 py-1 rounded-lg hover:text-white text-sm cursor-pointer"
            >
              No data found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
