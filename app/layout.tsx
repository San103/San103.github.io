import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import Logo from "@/public/svg/logo.svg";

const mont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jessan Palban - Portfolio",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* https://tailwindcomponents.com/component/navbar-hamburger-menu-for-ecommerce */}
      <body className={mont.className}>
        <div className="flex flex-wrap place-items-start">
          <section>
            <nav className="flex justify-between border-b border-gray-600 text-white w-screen">
              <div className="px-5 xl:px-12 py-3 flex w-full items-center">
                <div className="flex w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                  <a
                    className="pointer-events-none flex place-items-center gap-2 p-10 ml-12 lg:pointer-events-auto lg:p-0"
                    href="/"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Logo}
                      alt="Vercel Logo"
                      className="dark:invert"
                      width={75}
                      height={24}
                      priority
                    />
                  </a>
                </div>
                <ul className="hidden md:flex px-4 mx-auto text-sm font-heading space-x-12">
                  <li>
                    <a className="hover:text-gray-200" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200" href="#">
                      Expertise
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200" href="#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <a
                  className="flex items-center justify-center"
                  href="https://san-tech-blog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedGradientText className="bg-orange">
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `text-base inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                      )}
                    >
                      Visit Blog!
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-slate-800" />
                  </AnimatedGradientText>
                </a>
                {/* <div className="flex items-center justify-center">
                  <div
                    className={cn(
                      "group rounded-full border border-black/5 bg-orange-600 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span className="text-white">✨ Get in touch!</span>
                      <ArrowRightIcon className="text-white ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                  </div>
                </div> */}
                {/* <RainbowButton>HIRE ME!</RainbowButton> */}
              </div>
              {/* <a className="xl:hidden flex mr-6 items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a> */}
              <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </a>
            </nav>
          </section>
        </div>

        {children}
      </body>
    </html>
  );
}
