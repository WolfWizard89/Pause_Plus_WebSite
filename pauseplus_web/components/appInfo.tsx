import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import localFont from "next/font/local";

const LIbreItalic = localFont({
  src: "../fonts/Nunito-VariableFont_wght.ttf",
});


const appInfo = () => {
  return (
    <div>
      <div className={`flex justify-center items-center py-10 ${LIbreItalic.className}`} >
        <h1 className="text-white text-2xl md:text-5xl">
            Why are we special?
        </h1>
      </div>
      <div className="flex flex-col justify-end items-center md:flex-row md:space-x-4 md:space-y-0 space-y-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/S1.png" // Ensure S1.png is located in /public/images/
            alt="Screen 1"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-5 dark:text-neutral-200">
            Detailed DashBoard about your screen time
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            dashboard will show you the total time of screen time and the
            number of times you unlocked your phone. It will also show you the
            time you spent on each app.
          </p>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/s2.png" // Ensure S1.png is located in /public/images/
            alt="Screen 2"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-1 dark:text-neutral-200">
            Get Mindful Breaks while climbing the leaderboard
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Attempting our mindful games will help you to get a break from your
            social media addiction. You can also climb the leaderboard by
            attempting our gamified challenges. high scores prove your mindfulness!.
          </p>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/s3.png" // Ensure S1.png is located in /public/images/
            alt="Screen 3"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-8 dark:text-neutral-200">
            No Idea? Need help?
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            We have a community forum of people who are going through the same
            addiction. You can share your thoughts and get help from them. You
            can also get help from our experts.
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default appInfo;
