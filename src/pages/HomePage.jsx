"use client"

import React, { useEffect, useState } from 'react';
import HeroPage from "@page/HeroPage.jsx"
import AboutPage from "@page/AboutPage.jsx"
import SkillPage from "@page/SkillPage.jsx"
import SlidingSkill from "@ui/SlidingSkill.jsx"
import ProjectPage from "@page/ProjectPage.jsx"
import Footer from '@ui/Footer.jsx'
import ContactPage from '@page/ContactPage.jsx'
const HomePage = () => {
  
  

  return (
    <>
      <div className="w-full h-auto  flex flex-col items-center font-poppins justify-center text-black dark:text-white bg-zinc-900 ">
        <HeroPage key="home" />
        <SkillPage key="skill" />
        <ProjectPage key="project"/>
        <AboutPage key="abou" />
        <ContactPage key="contact" />
        <Footer/>
      </div>

    </>
  );
};

export default HomePage;
