import React, { useEffect, useState, useRef } from "react";

interface IntroTextProps {
  words: string[];
  id: string;
  colors?: string[];
}

const Intro: React.FC<IntroTextProps> = ({
  words,
  id,
  colors = ["#595959"],
}) => {
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [isTyping, setTyping] = useState(true);
  const [rendered, setrender] = useState(0);
  const index = useRef(0);

  function moveToNext() {
    if (rendered % 2 === 0) {
      index.current = (index.current + 1) % words.length;
    }
  }

  useEffect(() => {
    const target = document.getElementById(id);
    const typingInterval: number = 80;

    if (target) {
      const intervalText = setInterval(() => {
        if (letterCount === 0 && waiting === false) {
          // Ready to print the next sentence.
          setWaiting(true);
          target.innerHTML = words[index.current].substring(0, letterCount);
          setrender((render) => render + 1);
          moveToNext();
          setTimeout(() => {
            console.log(index.current);
            setX(1);
            target.setAttribute("style", `color: ${colors[index.current]}`);
            setLetterCount((count) => count + x);
            setWaiting(false);
          }, typingInterval);
        } else if (
          letterCount === words[index.current].length + 1 &&
          waiting === false
        ) {
          // the current sentence finishes
          setWaiting(true);
          setTimeout(() => {
            setX(-1);
            setLetterCount((count) => count + x);
            setWaiting(false);
          }, typingInterval);
        } else if (waiting === false) {
          // in the middle of a sentence
          target.innerHTML = words[index.current].substring(0, letterCount);
          setLetterCount((count) => count + x);
        }
        setTyping((prevTyping) => !prevTyping);
      }, typingInterval);

      return () => {
        clearInterval(intervalText);
      };
    }
  }, [colors, id, waiting, words, x, letterCount]);

  return (
    <div className="text-4xl text-center h-[200px] w-full mt-[120px] block">
      <span id={id}></span>
      <div className={`underscore ${isTyping ? "opacity-0" : ""}`} id="console">
        &#95;
      </div>
    </div>
  );
};

export default Intro;
