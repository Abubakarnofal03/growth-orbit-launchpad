import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  holdTime?: number;
}

export const useTypewriter = ({
  words,
  typeSpeed = 150,
  deleteSpeed = 80,
  delayBetweenWords = 1200,
  holdTime = 2000
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0] || ''); // Start with first word to prevent layout shift
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const typeWord = useCallback(async (word: string) => {
    setIsTyping(true);
    setIsDeleting(false);
    
    // Start with the current displayed text (to prevent layout shift)
    const startText = currentText;
    
    // Type out the word character by character from current state
    const startLength = startText.length;
    for (let i = startLength; i <= word.length; i++) {
      await new Promise(resolve => setTimeout(resolve, typeSpeed));
      setCurrentText(word.slice(0, i));
    }
    
    // Hold the complete word
    await new Promise(resolve => setTimeout(resolve, holdTime));
    setIsTyping(false);
  }, [typeSpeed, holdTime]);

  const deleteWord = useCallback(async (word: string) => {
    setIsTyping(false);
    setIsDeleting(true);
    
    // Delete the word character by character
    for (let i = word.length; i >= 0; i--) {
      await new Promise(resolve => setTimeout(resolve, deleteSpeed));
      setCurrentText(word.slice(0, i));
    }
    
    // Clear the text completely before moving to next word
    setCurrentText('');
    
    // Delay before moving to next word
    await new Promise(resolve => setTimeout(resolve, delayBetweenWords));
    setIsDeleting(false);
  }, [deleteSpeed, delayBetweenWords]);

  useEffect(() => {
    if (words.length === 0) return;

    const animate = async () => {
      const currentWord = words[currentWordIndex];
      
      if (!isTyping && !isDeleting) {
        await typeWord(currentWord);
        await deleteWord(currentWord);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    if (hasStarted) {
      animate();
    }
  }, [currentWordIndex, isTyping, isDeleting, hasStarted, words, typeWord, deleteWord]);

  // Start the animation after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return {
    currentText,
    isTyping,
    isDeleting,
    currentWordIndex
  };
};
