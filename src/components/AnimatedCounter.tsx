import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  label: string;
}

const AnimatedCounter = ({ target, label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericTarget = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[\d]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, numericTarget]);

  return (
    <div ref={ref}>
      <span className="font-mono text-3xl font-bold text-foreground">
        {count}{suffix}
      </span>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
