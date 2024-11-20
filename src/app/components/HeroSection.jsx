"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => (
  <section>
    <div className="grid grid-cols-1 sm:grid-cols-12 ">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            Hello, I'm{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Salah",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Front-End Developer",
              1000,
              "React.js Developer",
              1000,
              "Next.js Developer",
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-lg lg-2xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          totam nemo veniam voluptas fugiat, fuga ad quidem sapiente doloremque
          ullam!
        </p>
        <div>
          <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500   hover:bg-slate-200 w-full sm:w-fit">
            Hire Me{" "}
          </button>
          <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-pink-500 hover:bg-slate-800 border mt-4 w-full sm:w-fit">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV{" "}
            </span>
          </button>
        </div>
      </div>

      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            src="/_next/static/media/hero-image.3372c4ff.png"
            alt="hero image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;