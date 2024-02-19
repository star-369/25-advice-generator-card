import { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";

type Data = {
  slip: {
    id: number;
    advice: string;
  };
};

const App = () => {
  const [quote, setQuote] = useState<string>("");
  const [quoteId, setQuoteId] = useState<number>(0);

  useEffect(() => {
    fetchQuote();
  }, []); // Fetch quote on initial mount

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data: Data = await response.json();
      setQuote(data.slip.advice);
      setQuoteId(data.slip.id);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return <QuoteCard quote={quote} id={quoteId} onNewQuote={handleNewQuote} />;
};

export default App;
