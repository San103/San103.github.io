"use client";
import Image from "next/image";
import Link from "next/link";
import Meteors from "@/components/ui/meteors";
import { RainbowButton } from "@/components/ui/rainbow-button";
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import BoxReveal from "@/components/ui/box-reveal";
import orange from "@/public/svg/orange.svg";
import github from "@/public/svg/github.svg";
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
import ShinyButton from "@/components/ui/shiny-button";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
const name = "I'm San Palban";
const shortDetails = `" A passionate software engineer who transforms complex problems into elegant solutions. With expertise in various technologies, I build robust, scalable, and innovative applications that drive growth.🥰"`;
const githubLink = () => {
  return window.open("https://github.com/San103", "_blank");
};
export default function Home() {
  return (
    <main className="">
      <div className="flex w-full flex-col md:flex-row items-center justify-center md:shadow-xl ">
        <Meteors number={20} />

        {/* Column 1 */}
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center pl-32">
          <BoxReveal boxColor={"#ffff"} duration={0.5}>
            <div>
              <p className="text-[3.5rem] font-semibold text-white">
                Hi, {name}
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#ffff"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              <span className="text-white">FULLSTACK SOFTWARE ENGINEER</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#ffff"} duration={0.5}>
            <p className="text-white pt-8">
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
            <a
              className="flex items-center justify-center cursor-pointer"
              href="#expertise"
            >
              <div
                className={cn(
                  "group rounded-full bg-orange-600 text-base text-white py-3 px-7 flex items-center"
                )}
              >
                <span className="text-white">✨ Explore More</span>
                <ArrowRightIcon className="text-white ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            </a>
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
              className="absolute bottom-10 z-0 left-1/2 -translate-x-1/2"
              src={orange}
              alt="profile"
              width={480}
              height={90}
            />

            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />

            <div className="relative">
              <Image
                className="relative left-1/2 -translate-x-1/2 top-0"
                src="/images/profile.png"
                alt="profile"
                width={420}
                height={90}
                priority
              />
              <div className="w-full text-center">
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

      {/* The Next Page */}
      <div
        className="text-sm flex flex-col items-center justify-start min-h-96"
        id="expertise"
      >
        {/* <div className="flex min-h-64 items-center justify-center"> */}

        <TextReveal text={shortDetails} />
        {/* </div> */}
        <div className="text-center space-y-5 pt-32">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Testimonies
          </span>
          <p className="text-white/50">I do awesome services for my clients</p>
        </div>
      </div>
      <div className="min-h-44">
        <Witness />
      </div>

      <div className=" p-32 flex justify-center items-center flex-col my-32 space-y-10 ">
        <div className="text-center space-y-5">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Expertise
          </span>
          <p className="text-white/50">I do awesome services for my clients</p>
        </div>
        <Grid />
        <section className="" id="contact">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
              Feel free to get in touch for project inquiries, collaboration
              opportunities, or any questions you may have. I’m always excited
              to connect!
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="san@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm  rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                <ShinyButton>Send Message</ShinyButton>
              </button>
            </form>
          </div>
        </section>
      </div>
      {/* <div className="grid grid-cols-3 gap-20 text-white p-20">
          <ShineCard/>
          <ShineCard/>
          <ShineCard/>
        </div> */}
    </main>
  );
}
