import { useState, useEffect } from "react";

export default function useScrollHide() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currScrollPos;
      setPrevScrollPos(currScrollPos);
      setNavVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return navVisible;
}
