import { SyntheticEvent, useEffect } from "react";
export function useNavLink() {
  function activeCheck(e: SyntheticEvent) {
    const target = e.currentTarget as HTMLLIElement;
    document.querySelectorAll(".nav_link").forEach((li) => {
      li.classList.remove("active");
    });
    target.classList.add("active");
  }
  useEffect(() => {
    document.querySelectorAll(".nav_link") &&
      document.querySelectorAll(".nav_link").forEach((li) => {
        li.classList.remove("active");
      });
  }, []);
  return {
    activeCheck,
  };
}
