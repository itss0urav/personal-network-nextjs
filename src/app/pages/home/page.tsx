import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/button";
import { LampContainer } from "@/components/ui/lamp";
import Grid from "@/components/grid";
import { datas, projects } from "@/app/data/datas";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center  py-2">
      <div className="h-screen">
        <section className="h-screen space-y-10 lg:space-y-20 flex flex-col items-center justify-center flex-1 px-20 text-center">
          <Spotlight
            className=" -top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <h1 className="text-6xl font-bold">
            I'm a <br />
            full stack developer
          </h1>
          <p className="mt-3 text-2xl w-[70%] ">
            I am a full stack web developer with a keen interest in creating
            dynamic and interactive web applications. I love to explore new
            technologies and constantly learn to enhance my skills.
          </p>
          <div className="flex mt-6 justify-center">
            <Link href="#skills">
              <Button className="mx-3  font-bold text-white ">
                View Skills
              </Button>
            </Link>
            <Link href="#projects">
              <Button className="mx-3  font-bold text-white ">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="mx-3  font-bold text-white ">
                Contact Me
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <section id="skills" className="w-full">
        <LampContainer className="">
          <h2 className="text-4xl font-bold">Skills</h2>
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center mt-[10%]">
              <Grid data={datas} />
            </div>
          </div>
        </LampContainer>
      </section>
      <section id="projects" className="w-full">
        <LampContainer>
          <h2 className="text-4xl font-bold">Projects</h2>
        </LampContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="card bordered">
              <CardContainer className="inter-var  max-w-[80%]">
                <CardBody className=" bg-opacity-20 bg-gradient-to-r from-neutral-800 to-neutral-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-200 dark:text-white"
                  >
                    {project.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={10}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src={project.imageSrc}
                      height="1000"
                      width="1000"
                      className="h- w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.name}
                    />
                  </CardItem>
                  <div className="justify-end card-actions mt-20">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <a href={project.repoUrl}>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        View Source
                      </CardItem>
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </section>
      <section id="contact"></section>
    </div>
  );
}
