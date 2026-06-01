import { useState, useEffect } from "react";

const typewritingWords = [
  "React • React Native • Node.js",
  "TypeScript • Java • Spring Boot",
  "APIs REST • SQL • NoSQL",
];

export function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewritingWords[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentWord.length) {
          setCharIndex((c) => c + 1);
        } else if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % typewritingWords.length);
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="text-primary-400 font-mono text-lg sm:text-xl">
      {typewritingWords[wordIndex].substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
