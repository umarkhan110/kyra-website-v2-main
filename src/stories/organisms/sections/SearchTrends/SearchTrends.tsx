"use client";

import React, { useState, useRef, useEffect } from "react";
import * as NProgress from "nprogress";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchTrends.module.scss";

interface UserData {
  tiktok_id: string;
  username: string;
}

interface SearchComponentProps {
  data: UserData[];
}

export const SearchTrends = ({ data }: SearchComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<UserData[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);

  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    listItemsRef.current = listItemsRef.current.slice(0, suggestions.length);
  }, [suggestions]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        listRef.current &&
        !listRef.current.contains(e.target as Node)
      ) {
        setSuggestions([]);
        setSelectedItemIndex(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSuggestions([]);
        setSelectedItemIndex(null);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the data based on the search term
    const filteredSuggestions = data.filter((user) =>
      user.username.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setSelectedItemIndex(null);
  };

  const handleSuggestionClick = (username: string) => {
    setSearchTerm(username);
    inputRef.current?.focus();
    setSuggestions([]);
    setSelectedItemIndex(null);
    NProgress.start();
    router.push(`/creator/${username}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSearchTerm(suggestions[0].username);
        inputRef.current?.focus();
        setSuggestions([]);
        setSelectedItemIndex(null);
      } else {
        // Handle form submission
        handleSubmit();
      }
    } else if (e.key === "Tab" && listRef.current && suggestions.length > 0) {
      e.preventDefault();
      if (e.shiftKey) {
        inputRef.current?.focus();
      } else {
        listItemsRef.current[0]?.focus();
      }
    } else if (
      e.key === "ArrowUp" &&
      listRef.current &&
      suggestions.length > 0
    ) {
      e.preventDefault();
      const previousIndex =
        selectedItemIndex !== null && selectedItemIndex > 0
          ? selectedItemIndex - 1
          : suggestions.length - 1;
      setSelectedItemIndex(previousIndex);
      listItemsRef.current[previousIndex]?.focus();
    } else if (
      e.key === "ArrowDown" &&
      listRef.current &&
      suggestions.length > 0
    ) {
      e.preventDefault();
      const nextIndex =
        selectedItemIndex !== null && selectedItemIndex < suggestions.length - 1
          ? selectedItemIndex + 1
          : 0;
      setSelectedItemIndex(nextIndex);
      listItemsRef.current[nextIndex]?.focus();
    }
  };

  const handleListItemKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ) => {
    if (e.key === "Tab" && listRef.current) {
      if (index === suggestions.length - 1 && !e.shiftKey) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (index === 0 && e.shiftKey) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (index < suggestions.length - 1 && !e.shiftKey) {
        e.preventDefault();
        listItemsRef.current[index + 1]?.focus();
      } else if (index > 0 && e.shiftKey) {
        e.preventDefault();
        listItemsRef.current[index - 1]?.focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      setSearchTerm(suggestions[index].username);
      inputRef.current?.focus();
      setSuggestions([]);
      setSelectedItemIndex(null);
      NProgress.start();
      router.push(`/creator/${suggestions[index].username}`);
    } else if (e.key === "ArrowUp" && listRef.current) {
      e.preventDefault();
      const previousIndex = index > 0 ? index - 1 : suggestions.length - 1;
      setSelectedItemIndex(previousIndex);
      listItemsRef.current[previousIndex]?.focus();
    } else if (e.key === "ArrowDown" && listRef.current) {
      e.preventDefault();
      const nextIndex = index < suggestions.length - 1 ? index + 1 : 0;
      setSelectedItemIndex(nextIndex);
      listItemsRef.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = () => {
    NProgress.start();
    router.push(`/creator/${searchTerm}`);
  };

  return (
    <div className={styles.search}>
      <h2>Search</h2>
      <div className={styles.searchWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.searchBoxContainer}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              className={styles.searchBox}
              placeholder="Search user"
            />
            <FiSearch className={styles.searchIcon} />
          </div>
          <ul ref={listRef} tabIndex={-1} className={styles.suggestions}>
            {suggestions.slice(0, 5).map((user, index) => (
              <li
                key={user.tiktok_id}
                onClick={() => handleSuggestionClick(user.username)}
                onKeyDown={(e) => handleListItemKeyDown(e, index)}
                ref={(el) => (listItemsRef.current[index] = el)}
                tabIndex={selectedItemIndex === index ? 0 : -1}
              >
                {user.username}
              </li>
            ))}
            {suggestions.length > 5 && <li>...</li>}
          </ul>
          <input type="hidden" value="submit" />
        </form>
      </div>
    </div>
  );
};
