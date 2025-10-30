"use client";
import Image from "next/image";
import Link from "next/link";
import Meteors from "@/components/ui/meteors";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import BoxReveal from "@/components/ui/box-reveal";
import orange from "@/public/svg/orange.svg";
import github from "@/public/svg/github.svg";
import paper from "@/public/svg/paper.svg";
import gradient from "@/public/svg/gradient.png";
import SparklesText from "@/components/ui/sparkles-text";
import DockDemo from "@/components/ui/social";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import TextReveal from "@/components/ui/text-reveal";
import GridPattern from "@/components/ui/grid-pattern";
import LogoCloud from "@/components/logo-cloud";
import { ChevronDown, ChevronRight } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";
import Witness from "@/components/witness";
import { BorderBeam } from "@/components/ui/border-beam";
import ShineCard from "@/components/card-gradient";
import Grid from "@/components/grid";
import SafariDemo from "@/components/safari";
import ContactUs from "@/app/pages/contact-us";
import { AnimatedList } from "@/components/ui/animated-list";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useState, useEffect } from "react";
import NotifyMagic from "./pages/notification";
import HyperText from "@/components/ui/hyper-text";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { VideoText } from "@/components/ui/video-text";
import { TypingAnimation } from "@/components/ui/typing-animation";

const name = "Jessan Palban";
const shortDetails = `" A passionate software engineer who transforms complex problems into elegant solutions. With expertise in various technologies, I build robust, scalable, and innovative applications that drive growth.🥰"`;
const githubLink = () => {
  return window.open("https://github.com/San103", "_blank");
};


export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState<null | "success" | "error">(
    null
  );
  const handleSuccess = () => {
    setIsSubmitted("success");
  };
  const handleError = () => {
    setIsSubmitted("error");
  };
  const setStat = () => {
    setIsSubmitted(null);
  };

  return (
    <main className="">
      {isSubmitted && <NotifyMagic status={isSubmitted} setStatus={setStat} />}

      <div className="flex w-full flex-col md:flex-row items-center justify-center md:shadow-xl">
        <Meteors number={20} />

        {/* Column 1 */}
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full pl-32">
          <div className="relative h-[90px] w-full overflow-hidden ">
            <VideoText
              // src="https://www.pexels.com/download/video/18526831/"
              // src="https://www.pexels.com/download/video/9909477/"
              // src="https://www.pexels.com/download/video/29882131/"
              // src="https://www.pexels.com/download/video/854322/"
              src="https://www.pexels.com/download/video/19997371/"
              // src="https://www.pexels.com/download/video/6466100/"
            >
              Jessan Palban
            </VideoText>
          </div>
          {/* https://www.pexels.com/download/video/5091624/ */}
          <h2 className="text-[1rem]">
          <TypingAnimation className="text-white">FULLSTACK SOFTWARE ENGINEER 👋</TypingAnimation>
            {/* <span className="text-white">FULLSTACK SOFTWARE ENGINEER</span> */}
          </h2>
          <BoxReveal boxColor={"#ffff"} duration={0.5}>
            <p className="text-white">
              As a dedicated software engineer, I design intuitive and
              user-friendly interfaces that empower businesses to harness the
              full potential of their data. Our platform provides real-time
              insights, analytics, and visualizations to help you make informed
              decisions and drive operational efficiency.
            </p>
          </BoxReveal>
          <div className="mt-10 flex space-x-8">
            <RainbowButton onClick={githubLink}>
              {" "}
              <Image
                className="mr-3"
                src={github}
                alt="GitHub Logo"
                width={20}
                height={20}
              />
              View on Github!
            </RainbowButton>
            <RainbowButton onClick={githubLink}>
              {" "}
              <Image
                className="mr-3"
                src={paper}
                alt="portfolio logo"
                width={20}
                height={20}
              />
              Portfolio!
            </RainbowButton>
            {/* <a
              className="flex items-center justify-center cursor-pointer"
              href="#expertise"
            >
              <div
                className={cn(
                  "group rounded-full bg-orange-600 text-base text-white py-3 px-7 flex items-center"
                )}
              >
                <span className="text-white">✨ View Portfolio</span>
                <ArrowRightIcon className="text-white ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            </a> */}
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative bottom-12 pointer-events-none">
          <div className="relative w-[800px] h-[50rem]">
            <Image
              className="absolute top-10 rotate-180"
              src={gradient}
              alt="profile"
              width={1080}
              height={90}
            />
            <Image
              className="absolute top-44 rotate-180"
              src={gradient}
              alt="profile"
              width={1080}
              height={90}
            />
            <Image
              className="absolute bottom-10 rotate-270"
              src={gradient}
              alt="profile"
              width={1080}
              height={90}
            />
            <Image
              className="absolute bottom-36 z-0 left-1/2 -translate-x-1/2"
              src={orange}
              alt="profile"
              width={380}
              height={90}
            />

            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />

            <div className="relative">
              <Image
                className="relative left-1/2 -translate-x-1/2 top-20"
                src="/images/profile.png"
                alt="profile"
                width={320}
                height={90}
                priority
              />
              <div className="w-full text-center pt-10">
                <SparklesText
                  text="INNOVATE"
                  colors={{ first: "red", second: "white" }}
                  className="text-white tracking-wider text-7xl"
                />
                <span className="text-white text-xl">BEYOND LIMITS!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-col justify-center items-center space-y-6">
          <DockDemo />
          <ChevronDown className="size-8 text-white animate-bounce-slow" />
        </div>
      </div>

      <div
        className="text-sm flex flex-col items-center justify-start min-h-96"
        id="expertise"
      >
        <TextReveal text={shortDetails} />
        {/* <div className="text-center space-y-5 pt-32">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Testimonies
          </span>
          <p className="text-white/50">I do awesome services for my clients</p>
        </div> */}
      </div>
      {/* <div className="min-h-44">
        <Witness />
      </div> */}

      <div className=" p-32 flex justify-center items-center flex-col my-32 space-y-10 ">
        <div className="text-center space-y-5">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Projects
          </span>
          <p className="text-white/50">
            Awesome services I offered for my clients
          </p>
        </div>
        <Grid />
      </div>
      <ContactUs onSubmitSuccess={handleSuccess} onSubmitError={handleError} />
      {/* <div className="grid grid-cols-3 gap-20 text-white p-20">
          <ShineCard/>
          <ShineCard/>
          <ShineCard/>
        </div> */}
    </main>
  );
}
