import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesConfig from "./ParticlesConfig";
import ParticlesText from './ParticlesText';

// =======================
// Import Image & Logo
import PumpLeft from '../../Image/Left-Pump.png';
import PumpRight from '../../Image/Right-Pump.png';
import ParticlesBackground from '../../Video/MM008790___WATER_FAUCET_002___1080p___phantom.mp4';

// Import Image & Logo
// =======================
// Import Custom Style
import "../../Style/Usermain.css";
// Import Custom Style
// =======================
const ParticlesScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef();
    const PumpScrollRef = useRef(null);
    const q = gsap.utils.selector(PumpScrollRef);
    useEffect(() => {
        ScrollTrigger.create({
            trigger: PumpScrollRef.current,
            start: "top top",
            end: "+=4000"
        });
        tl.current = gsap
            .timeline()
            .fromTo(
                q("#pumpscroll"),
                { marginTop: 50, y: 300 },
                { scale: 1, y: 0, duration: 0.1 }
            )
            .fromTo(
                q("#pumpscroll"),
                {
                    scale: 1,
                    y: 0
                },
                {
                    scale: 0.8,
                    y: -300,
                    duration: 1,
                    ease: "sine.out",
                    scrollTrigger: {
                        start: 200,
                        end: 400,
                        scrub: 0.5
                    }
                }
            )
            .fromTo(
                q("#particlesscroll"),
                { marginTop: 250, y: 300 },
                { scale: 1, y: 0, duration: 0.1 }
            )
            .fromTo(
                q("#particlesscroll"),
                {
                    scale: 1,
                    y: 0
                },
                {
                    scale: 1,
                    y: -300,
                    width: 1903,
                    duration: 1,
                    ease: "sine.out",
                    scrollTrigger: {
                        start: 50,
                        end: 300,
                        scrub: 0.5
                    }
                }
            )
    }, []);
    return (
        <div>
            <div className="pumpScroll" id="pumpScroll" ref={PumpScrollRef}>
                {/* <video className="particles-backgrond-sty" src={ParticlesBackground} controls={false} autoPlay loop muted /> */}
                <div id="particlesscroll" className="test">
                    <ParticlesText />
                    <ParticlesConfig id="tsparticles" />
                </div>
                <div className="panel">
                    <img
                        id="pumpscroll"
                        src={PumpLeft}
                        alt="pumpscroll 150 png"
                    />
                    <img
                        id="pumpscroll"
                        src={PumpRight}
                        alt="pumpscroll 150 png"
                    />
                </div>
            </div>
        </div>

    );
};

export default ParticlesScroll;