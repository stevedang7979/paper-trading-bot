import { useEffect, useState } from "react";

export default function usePopup() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setPopup(false), 3000);
    return () => clearInterval(interval);
  }, [popup]);
  return { popup, setPopup };
}
