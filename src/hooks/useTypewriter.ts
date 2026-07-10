import { useEffect, useState } from "react";

const DEFAULT_SPEED_MS = 40;

export function useTypewriter(text: string, speedMs = DEFAULT_SPEED_MS) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setTypedText("");
    if (!text) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs]);

  return typedText;
}
