"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import LogoCloud from "@/components/logo-cloud";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[170vh] ", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[45%] max-w-full items-center bg-transparent px-[1rem] py-[5rem] "
        }
      >
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
            "inset-x-60 inset-y-[-60%] h-[200%] skew-y-12"
          )}
        />

        {/*  */}
        <div className="flex items-center justify-center w-full ">
          <div className="w-full md:w-1/2">
            <p
              ref={targetRef}
              className={
                "flex italic flex-wrap p-5 text-2xl font-bold text-black/15 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
              }
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            {/* <div className="text-white flex flex-col">
              <div className="space-x-3">

              <span>Laravel</span>
              <span>React js</span>
              <span>Vue js</span>
              <span>React Native</span>
              <span>Php</span>
              <span>Typescript</span>
              </div>
            </div> */}
            <LogoCloud />
          </div>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30 leading-tight"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-slate-300 dark:text-white leading-tight"} //text-black
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
