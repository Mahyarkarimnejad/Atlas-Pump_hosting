import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import Components
// =======================
// Import Custom Style
import '../../Style/Usermain.css';
// Import Custom Style
// =======================
// Import Icons & Fonts
// Import Icons & Fonts
// =======================
// Import Logo & Images
// Import Logo & Images
// =======================

const ParticlesScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ps = useRef();
    const TextReveal = useRef(null);
    const textreveal = gsap.utils.selector(TextReveal);
    useEffect(() => {
        ScrollTrigger.create({
            trigger: TextReveal.current,
            start: "top top",
            end: "+=1000"
        });
        ps.current = gsap
            .timeline()
            .fromTo(
                textreveal("#text-reveal"),
                { marginTop: 0, y: 0 },
                { scale: 1, y: 0, duration: 0.1 }
            )
            .fromTo(
                textreveal("#text-reveal"),
                {
                    scale: 1,
                    y: 0
                },
                {
                    scale: 0.8,
                    x: 300,
                    duration: 1,
                    ease: "sine.out",
                    scrollTrigger: {
                        start: 400,
                        end: 600,
                        scrub: 0.5
                    }
                }
            )
    }, []);
    return (
        <div className="text-reveal" ref={TextReveal}>
            <h1 id="text-reveal" >
                Lorem Ipsum is dummy text Lorem Ipsum is dummy text
            </h1>
        </div>
    );
};
export default ParticlesScroll;