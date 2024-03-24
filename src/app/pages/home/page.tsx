import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
export default function home() {
  return (
    <>
      <section>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              I&apos;m a <br />
              full stack developer
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              I am a full stack web developer with a keen interest in creating
              dynamic and interactive web applications. I love to explore new
              technologies and constantly learn to enhance my skills.
            </p>
          </div>
        </div>
        <div className=" flex justify-center gap-4">
          <Link href="#skills">
            <Button className="">View Skills</Button>
          </Link>
          <Link href="/pages/projects">
            <Button className="">View Projects</Button>
          </Link>
          <Link href="/pages/contact">
            <Button className="">Contact Me</Button>
          </Link>
        </div>
      </section>
      <section className="h-auto" id="skills">
        <LampContainer>
          <span className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Skills
          </span>
          
        </LampContainer>
      </section>
    </>
  );
}
