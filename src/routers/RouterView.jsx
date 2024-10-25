import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import { motion } from 'framer-motion';


import HomePage from '@page/HomePage.jsx';
import TestPage from "@page/TestPage.jsx"
import HeroPage from '@page/HeroPage.jsx'
import SkillPage from "@page/SkillPage.jsx"
import ProjectPage from "@page/ProjectPage.jsx"
import AboutPage from "@page/AboutPage.jsx"
import NotFound from '@page/NotFound.jsx'
import Admin from "@admin/Admin.jsx"
import AdminLogin from '@admin/Login.jsx'
import VerifyOTP from "@admin/VerifyOTP.jsx"

const PageTransition = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => <PageTransition><HomePage /></PageTransition>;
const Hero = () => <PageTransition><HeroPage /></PageTransition>;
const Skill = () => <PageTransition><SkillPage /></PageTransition>;
const Test = () => <PageTransition><TestPage /></PageTransition>;
const Project= () => <PageTransition><ProjectPage/></PageTransition>
const About= () => <PageTransition><AboutPage/></PageTransition>
const PageNotFound = () => <PageTransition><NotFound/></PageTransition>
const AdminPage = () => <PageTransition><Admin/></PageTransition>
const AdminLoginPage = () => <PageTransition><AdminLogin/></PageTransition>
const VerifyLogin  = () => <PageTransition><VerifyOTP/></PageTransition>


const RouterView = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/test" element={<Test />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/login/otp-verification" element={<VerifyLogin />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterView;
