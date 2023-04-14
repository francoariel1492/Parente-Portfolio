import Head from "next/head";
import Image from "next/image";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import {
  socialLinks,
  servicesInfo,
  certificateTitle,
  certificatesDescription,
  certificatesLinks,
  servicesTitles,
  myInfo,
} from "./data";

import {
  frontEnd,
  backEnd,
  dbSvg,
  toolsSvg,
  social,
  certificates,
  services,
} from "./iconsData";

import { projectsData } from "./projectsData";
import meDark from "/public/heroImg/meDark.png";
import meLight from "/public/heroImg/meLight.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Parente - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <main className="bg-amber-100 px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-3xl text-amber-500">{"</>"}</h1>
            <ul className="flex items-center">
              <li>
                {!darkMode ? (
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-bl from-amber-500 to-orange-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1YV0kVvhsgOJrYe9o7Yn0uqpyZiIKm-1w/view?usp=sharing"
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
              Franco Ariel Parente
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Engineer MERN
            </h3>
            <p className="text-md leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {myInfo}
            </p>
            <div className="mx-auto  w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={!darkMode ? meLight : meDark}
                layout="fill"
                objectFit="cover"
                alt="webimg"
              />
            </div>
            <div className="py-5 m-5">
              <h3 className="text-2xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
                Front End Skills
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {frontEnd.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
              <h3 className="text-2xl text-orange-500 py-2 font-medium dark:text-amber-500 md:text-6xl">
                Back End Skills
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {backEnd.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
              <h3 className="text-2xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
                D B
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {dbSvg.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
              <h3 className="text-2xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
                TOOLS
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {toolsSvg.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h3 className="text-2xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
            Studies
          </h3>
          <div className="flex flex-wrap justify-around gap-5 p-5 m-5">
            {certificates.map((image, index) => (
              <div
                key={index}
                className="max-w-sm bg-orange-400 border border-gray-200 rounded-lg shadow-md dark:bg-zinc-800 dark:border-gray-700"
              >
                <a href={certificatesLinks[index]}>
                  <Image
                    src={image}
                    layout="responsive"
                    objectFit="contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                </a>
                <div className="p-5">
                  <a href={certificatesLinks[index]}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {certificateTitle[index]}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {certificatesDescription[index]}
                  </p>
                  <a
                    href={certificatesLinks[index]}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-700 rounded-lg dark:bg-gradient-to-bl from-orange-500 to-amber-500"
                  >
                    Certificate
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
              Services
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since I began my career as a web developer, I have created
              different websites in which I have had the pleasure of
              collaborating with very{" "}
              <span className="text-orange-500">talented people</span>, and I
              have been able to develop{" "}
              <span className="text-orange-500">my own ideas</span> that emerged
              in the middle of the learning period.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              What I like to provide when developing a project is
            </p>
          </div>
          <div className="lg:flex gap-10">
            {services.map((image, index) => (
              <div
                key={index}
                className="text-center text-white shadow-lg p-10 rounded-xl my-10 bg-orange-400  dark:bg-zinc-500 dark:border-gray-700 flex-1"
              >
                <Image src={image} width={100} height={100} alt="webimg" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  {servicesTitles[index]}
                </h3>
                <p className="py-2">{servicesInfo[index]}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="pt-5 text-center">
          <div className="flex flex-col gap-1 py-1 lg:flex-row lg:flex-wrap pt-10">
            <div className="flex flex-col">
              <h2 className="text-5xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
                Portfolio
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl pb-10">
                Find below a list of some of the recent projects that I have
                been involved in: 💻
              </h3>
            </div>
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 py-2 my-2 lg:flex-row lg:flex-wrap pt-10 projectBorder"
              >
                <h3 className="basis-2/3 flex-1 text-2xl py-2 dark:text-white md:text-3xl">
                  {project.projectTitle}
                </h3>
                <p className="basis-2/3 flex-1 text-md leading-8 text-gray-800 dark:text-gray-200">
                  {project.projectDescription}
                </p>
                <a
                  className="basis-2/3 flex-1 text-2xl pt-2 text-orange-500 font-medium dark:text-amber-500 md:text-3xl"
                  href={project.repoLink}
                  target="blank"
                >
                  Github Repo
                </a>
                <div className="basis-1/3 flex-1 ">
                  <a target="blank" href={project.deployLink}>
                    <Image
                      className="rounded-lg object-contain"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={project.img[0]}
                      alt="webimg"
                    />
                  </a>
                </div>
                <div className="basis-1/3 flex-1 ">
                  <a target="blank" href={project.deployLink}>
                    <Image
                      className="rounded-lg object-contain"
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      src={project.img[1]}
                      alt="webimg"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-5xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
            Contact me
          </h2>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Did you enjoy my work? Are you interested in learning more or
            working with me? Feel free to add me and I will respond as soon as
            possible.
          </p>
          <div className="gap-5 flex flex-row justify-center py-10">
            {social.map((image, index) => (
              <a key={index} href={socialLinks[index]}>
                <Image
                  key={index}
                  src={image}
                  className="rounded-lg object-contain"
                  width={"50%"}
                  height={"50%"}
                  alt="webimg"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
