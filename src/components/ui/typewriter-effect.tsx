import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    delay?: number;
}

export const TypewriterEffect = ({
    words,
    className = "",
    cursorClassName = "",
    typingSpeed = 150,
    deletingSpeed = 100,
    delay = 2000,
}: TypewriterEffectProps) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(typingSpeed);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % words.length;
        let fullText = words[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(deletingSpeed);
        } else {
            setDelta(typingSpeed);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(delay);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <span className={className}>
            {text}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`ml-1 inline-block w-[2px] h-[1em] bg-primary align-middle ${cursorClassName}`}
            />
        </span>
    );
};
