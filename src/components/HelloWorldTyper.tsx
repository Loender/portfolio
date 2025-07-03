"use client";
import React, { useState, useEffect } from "react";

const greetings = [
  'print("Hello World")', // Python
  `System.out.println("Hello World");`, // Java
  `console.log("Hello World");`, // JS
  `puts "Hello World"`, // ruby
  `std::cout << "Hello World";`, // c++
  `echo "Hello World";`, // php
];

const TYPING_SPEED = 80;
const ERASING_SPEED = 60;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_AFTER_ERASING = 500;

export default function HelloWorldTyper() {
  const [text, setText] = useState("");
  const [greetIndex, setGreetIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (charIndex < greetings[greetIndex].length) {
        timer = setTimeout(() => {
          setText((prev) => prev + greetings[greetIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPING);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, ERASING_SPEED);
      } else {
        setGreetIndex((prev) => (prev + 1) % greetings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, greetIndex, isTyping]);

  return (
    <div className="text-3xl text-emerald-600 font-mono h-12">
      <span>{text}</span>
      <span className="blinking-cursor">|</span>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 3rem;
          color: var(--accent-color);
          animation: blink 1s step-start 0s infinite;
          user-select: none;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
