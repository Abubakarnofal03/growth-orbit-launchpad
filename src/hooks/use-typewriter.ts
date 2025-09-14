
import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  holdTime?: number;
}

type Phase = 'typing' | 'holding' | 'deleting';

export const useTypewriter = ({
  words,
  typeSpeed = 60,
  deleteSpeed = 35,
  delayBetweenWords = 1200,
  holdTime = 1800
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentWordIndex];

    if (phase === 'typing') {
      if (currentText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase('holding');
        }, holdTime);
      }
    } else if (phase === 'holding') {
      timeoutRef.current = setTimeout(() => {
        setPhase('deleting');
      }, delayBetweenWords);
    } else if (phase === 'deleting') {
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase('typing');
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 400);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, currentWordIndex, currentText, phase, typeSpeed, deleteSpeed, delayBetweenWords, holdTime]);

  return {
    currentText,
    isTyping: phase === 'typing',
    isDeleting: phase === 'deleting',
    currentWordIndex
  };
};
