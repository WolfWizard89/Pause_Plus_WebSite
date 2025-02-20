"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { HoverEffect } from "./ui/card-hover-effect";

const Questions = () => {
  return (
    <div className="flex flex-col">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Frequently asked <br /> Questions
        </motion.h1>
        
      </LampContainer>
      <div className="mx-auto px-8 bg-slate-950 w-full">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Questions;

export const projects = [
  {
    title: "What is Mindfulness?",
    description:
      "Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.",
    
  },
  {
    title: "What is PausePlus?",
    description:
      "PausePlus is a social media detox app that helps you take a break from social media and focus on what matters most.",
    
  },
  {
    title: "Release date of PausePlus?",
    description:
      "App is still in development and will be released soon in the coming months.",
    
  },
  {
    title: "What is social media detox?",
    description:
      "Social media detox is a period during which a person refrains from using social media as an opportunity to reduce stress and focus on real-life social interactions.",

  },
  {
    title: "How our app is different?",
    description:
      "Insted of just blocking the apps, we provide a platform where you can interact with other users and share your thoughts. Also, we provide a gamified experience to make the process fun.",
    
  },
  {
    title: "Available platforms?",
    description:
      "Firstly, the app will be available on Android. We are also planning to release the app on iOS in the future.",
    
  },
];
