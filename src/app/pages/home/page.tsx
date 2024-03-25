import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { Button } from "@/components/button";
import { LampContainer } from "@/components/ui/lamp";
import Grid from "@/components/grid";
import { datas } from "@/app/data/datas";

export default function home() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="h-full md:h-auto w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              I'm a <br />
              full stack developer
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              I am a full stack web developer with a keen interest in creating
              dynamic and interactive web applications. I love to explore new
              technologies and constantly learn to enhance my skills.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
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
      <section className="h-screen flex flex-col items-center justify-center" id="skills">
        <LampContainer className="">
          <span className="pt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl md:text-7xl font-medium tracking-tight text-transparent">
            Skills
          </span>
          <div className="mt-10 md:mt-20 w-full max-w-7xl">
            <Grid data={datas} />
          </div>
        </LampContainer>
      </section>
    </>
  );
}
