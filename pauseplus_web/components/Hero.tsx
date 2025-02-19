import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import localFont from "next/font/local";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import logo from "../images/icon.png";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
// Update the path if fonts are in /e:/Project/Pause_Plus_WebSite/pauseplus_web/fonts
const SpaceMono = localFont({
  src: "../fonts/SpaceMono-Regular.ttf",
});

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-[40rem] relative rounded-md ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[30vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="red" />
      </div>

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={logo} alt="Pause Plus Logo" className="w-[400px] mb-2" />
        <div className="w-[40rem] h-20 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <div>
          <h4
            className={`text-xl md:text-2xl text-center text-white relative z-20 ${SpaceMono.className}`}
          >
            Unplug, unwind, and rediscover balance. 🌿
          </h4>
          <TextGenerateEffect
            className="text-center text-3xl md:text-3xl lg:text-3xl"
            words="Step away from digital noise and enjoy mindful breaks."
          />
        </div>
        <a href="#">
          <MagicButton 
          title = "Apply for Alpha Testing"
          icon = {<FaLocationArrow/>}
          position = "right"
          />
        </a>
      </div>
      <div
        className={`text-4xl md:text-8xl text-center text-white relative z-20 ${SpaceMono.className}`}
      ></div>
    </div>
  );
};

export default Hero;
