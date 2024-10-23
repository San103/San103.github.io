import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  setStatus: () => void;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 5000, setStatus }: AnimatedListProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      // Start animation after the component mounts
      setShouldAnimate(true);

      // Hide the notification after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        setShouldAnimate(false); // Optional: you can keep this true if you want to allow other animations later
        setStatus();
      }, delay);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [delay, setStatus]);

    const itemsToShow = useMemo(
      () => (isVisible && shouldAnimate ? childrenArray : []),
      [isVisible, shouldAnimate, childrenArray]
    );

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
