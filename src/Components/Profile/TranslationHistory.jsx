import { useEffect, useState } from "react";
import TranslationHistoryItem from "./TranslationHistoryItem";

function TranslationHistory() {
  const [translations, setTranslations] = useState("");

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      const storedTranslations = localStorage.getItem("translation");
      if (storedTranslations) {
        setTranslations(storedTranslations);
      }
    }
  }, []);

  const translationList = translations.map((translation) => (
    <TranslationHistoryItem key={translation} translation={translation} />
  ));

  return <ul>{translationList}</ul>;
}

export default TranslationHistory;
