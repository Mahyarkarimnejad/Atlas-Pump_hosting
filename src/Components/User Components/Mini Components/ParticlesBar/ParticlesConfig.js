import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import React, { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
      },
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 1,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 130,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.5, max: 0.7 },
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
