import React from 'react'
import { Routes, Route,useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Home from "../pages/Home";
import Testimonial from "../pages/Testimonial";
import Experience from "../pages/Experience";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
export default function AnimatedRoutes() {
    const location=useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route  path="/*" element={<Home />} />
            <Route  path="/Services" element={<Service />} />
            <Route  path="/Projects" element={<Projects />} />
            <Route path="/Skill/frontend" element={<Projects />} />
            <Route path="/Skill" element={<Experience />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}
