import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const team = () => {
  const testimonials = [
    {
      quote:
        "Crafting intuitive and beautiful interfaces isn’t just about code—it’s about creating seamless experiences that users love. Every pixel and interaction tells a story, and we’re here to make it a great one.",
      name: "Eshan Bhanuka",
      designation: "Team Member | Frontend Developer",
      src: "/Eshan.jpg",
    },
    {
      quote:
        "The frontend is where creativity meets logic. We focus on delivering responsive, accessible, and engaging user experiences that make every interaction smooth and delightful.",
      name: "Pesandu Nethmitha",
      designation: "Team Member | Frontend Developer",
      src: "/pesandu.jpg",
    },
    {
      quote:
        "The backend is the engine that powers the entire system. We focus on performance, security, and seamless data flow, ensuring the project runs smoothly from behind the scenes",
      name: "Nimesha Sachethani",
      designation: "Team Lead | Backend Developer",
      src: "/female.jpg",
    },
    {
      quote:
        "Bridging the gap between design and technology, we create interfaces that not only work flawlessly but also feel intuitive. Every detail matters in delivering an exceptional user journey.",
      name: "Sandali Matheesha",
      designation: "Team Member | Frontend Developer",
      src: "/female.jpg",
    },
    {
      quote:
        "Behind every smooth user experience is a robust backend. We build scalable, efficient systems that ensure everything works reliably—no matter how complex the task",
      name: "Rusith Renuja",
      designation: "Team Member | Backend Developer",
      src: "/male.jpg",
    },
    {
      quote:
        "Design meets functionality on the frontend. We turn complex ideas into simple, user-friendly interfaces that bring the project to life—one component at a time.",
      name: "Movith Gunawardhana",
      designation: "Team Member | Frontend Developer",
      src: "/male.jpg",
    },
  ];

  return (
    <div className="bg-slate-950">
        <h1 className="text-4xl text-center text-white py-10">Meet Our Team</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default team;
